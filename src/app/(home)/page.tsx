"use client";

import * as React from "react";

import { DebugCard } from "@/components/debug-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  calculateFederalDeductions,
  calculateProvincialDeductions,
} from "@/lib/calculations";
import { z } from "zod";
import { Options } from "./_components/options/options";
import { Summary } from "./_components/summary";
import { TaxBracketBreakdownTable } from "./_components/tax-bracket-breakdown-table";
import { OptionsFormSchema } from "./_constants/options-form-schema";
import { Disclaimer } from "./_components/disclaimer";
import { PAYMENT_FREQUENCIES } from "./_constants/payment-frequency";

export default function Home() {
  const [options, setOptions] =
    React.useState<z.infer<typeof OptionsFormSchema>>();

  const computedIncome = React.useMemo(() => {
    if (!options) return 0;
    const { income, paymentFrequency } = options;
    const multiplier =
      PAYMENT_FREQUENCIES.find((item) => item.value === paymentFrequency)
        ?.multiplier ?? 1;
    return income * multiplier;
  }, [options]);

  const federalTaxDeductions = React.useMemo(() => {
    if (!options) return { brackets: [], total: 0 };
    return calculateFederalDeductions(computedIncome, options.year);
  }, [computedIncome, options]);

  const provincialTaxDeductions = React.useMemo(() => {
    if (!options) return { brackets: [], total: 0 };
    return calculateProvincialDeductions(
      computedIncome,
      options.year,
      options.province
    );
  }, [computedIncome, options]);

  const totalTax = React.useMemo(() => {
    if (!options) return 0;
    return federalTaxDeductions.total + provincialTaxDeductions.total;
  }, [federalTaxDeductions, provincialTaxDeductions, options]);

  const netPay = React.useMemo(() => {
    if (!options) return 0;
    return options.income - totalTax;
  }, [options, totalTax]);

  const debugData = {
    // federalTaxDeductions,
    // provincialTaxDeductions,
    options,
    computedIncome,
  };

  return (
    <div className="space-y-4">
      <Disclaimer />
      <Options setOptions={setOptions} />

      {options && (
        <Tabs defaultValue="summary">
          <div className="flex justify-end items-center mb-2 gap-4">
            <TabsList>
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="annual-tax-bracket-deductions">
                Annual Tax Bracket Deductions
              </TabsTrigger>
              <TabsTrigger value="debug-data">Debug</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="summary">
            <Summary
              federalDeductionAmount={federalTaxDeductions.total}
              provincialDeductionAmount={provincialTaxDeductions.total}
              totalTax={totalTax}
              netPay={netPay}
            />
          </TabsContent>

          <TabsContent value="annual-tax-bracket-deductions">
            <div className="space-y-4">
              <TaxBracketBreakdownTable
                title="Federal"
                data={federalTaxDeductions}
              />
              <TaxBracketBreakdownTable
                title="Provincial"
                data={provincialTaxDeductions}
              />
            </div>
          </TabsContent>

          <TabsContent value="debug-data">
            <DebugCard data={debugData} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
