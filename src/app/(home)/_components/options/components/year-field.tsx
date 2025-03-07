"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control } from "react-hook-form";
import { z } from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TAX_BRACKETS } from "@/lib/constants/tax-rates";
import { OptionsFormSchema } from "../../../_constants/options-form-schema";

export function YearField({
  control,
}: {
  control: Control<z.infer<typeof OptionsFormSchema>>;
}) {
  const yearOptions = Object.keys(TAX_BRACKETS).sort((a, b) => {
    return Number(b) - Number(a);
  });

  return (
    <FormField
      control={control}
      name="year"
      render={({ field }) => (
        <FormItem>
          <FormLabel>For</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value.toString()}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="min-w-0">
              {yearOptions.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
