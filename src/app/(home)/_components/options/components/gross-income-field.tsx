"use client";

import { Control } from "react-hook-form";
import { z } from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { OptionsFormSchema } from "../../../_constants/options-form-schema";

export function GrossIncomeField({
  control,
}: {
  control: Control<z.infer<typeof OptionsFormSchema>>;
}) {
  return (
    <FormField
      control={control}
      name="income"
      render={({ field }) => (
        <FormItem className="flex-grow">
          <FormLabel>Gross income</FormLabel>
          <FormControl>
            <Input {...field} type="number" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
