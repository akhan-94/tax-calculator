"use client";

import { Card } from "@/components/ui/card";
import { z } from "zod";
import { OptionsFormSchema } from "../../_constants/options-form-schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { PROVINCES } from "@/app/(home)/_constants/provinces";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { getCurrentYear } from "@/lib/date/get-current-year";
import { PAYMENT_FREQUENCIES } from "../../_constants/payment-frequency";
import { GrossIncomeField } from "./components/gross-income-field";
import { PaymentFrequencyField } from "./components/payment-frequency-field";
import { ProvinceField } from "./components/province-field";
import { YearField } from "./components/year-field";

export function Options({
  setOptions,
}: {
  setOptions: (options: z.infer<typeof OptionsFormSchema>) => void;
}) {
  const form = useForm<z.infer<typeof OptionsFormSchema>>({
    resolver: zodResolver(OptionsFormSchema),
    defaultValues: {
      income: 0,
      paymentFrequency: PAYMENT_FREQUENCIES[0].value,
      province: PROVINCES[0].value,
      year: getCurrentYear(),
    },
  });

  function onSubmit(data: z.infer<typeof OptionsFormSchema>) {
    setOptions(data);
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <GrossIncomeField control={form.control} />
                <PaymentFrequencyField control={form.control} />
                <ProvinceField control={form.control} />
                <YearField control={form.control} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Calculate</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
