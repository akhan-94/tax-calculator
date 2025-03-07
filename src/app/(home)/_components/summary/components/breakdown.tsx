"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SelectSeparator } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";

export function Breakdown({
  federalDeductionAmount,
  provincialDeductionAmount,
  totalTax,
  netPay,
}: {
  federalDeductionAmount: number;
  provincialDeductionAmount: number;
  totalTax: number;
  netPay: number;
}) {
  const DEDUCTIONS = React.useMemo(() => {
    return [
      { label: "Federal tax deduction", value: federalDeductionAmount },
      { label: "Provincial tax deduction", value: provincialDeductionAmount },
      { label: "CPP deduction", value: 0 },
      { label: "EL deduction", value: 0 },
    ];
  }, [federalDeductionAmount, provincialDeductionAmount]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {DEDUCTIONS.map((deduction) => (
            <Row
              key={deduction.label}
              label={deduction.label}
              valuePrefix="-"
              value={deduction.value}
            />
          ))}
          <SelectSeparator className="mb-4" />
          <Row label="Total tax" value={totalTax} bold valuePrefix="-" />
          <Row label="Net pay" value={netPay} bold size="large" />
        </div>
      </CardContent>
    </Card>
  );
}

function Row({
  label,
  value,
  size = "default",
  bold = false,
  valuePrefix = "",
}: {
  label: string;
  value: number;
  size?: "default" | "large";
  bold?: boolean;
  valuePrefix?: string;
}) {
  const formattedValue = Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(value);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className={cn({ "font-bold": bold, "text-2xl": size === "large" })}>
        {label}
      </div>
      <div
        className={cn("text-right", {
          "font-bold": bold,
          "text-2xl": size === "large",
        })}
      >
        {valuePrefix} {formattedValue}
      </div>
    </div>
  );
}
