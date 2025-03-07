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
import { OptionsFormSchema } from "../../../_constants/options-form-schema";
import { PAYMENT_FREQUENCIES } from "../../../_constants/payment-frequency";

export function PaymentFrequencyField({
  control,
}: {
  control: Control<z.infer<typeof OptionsFormSchema>>;
}) {
  return (
    <FormField
      control={control}
      name="paymentFrequency"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Per</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="min-w-0">
              {PAYMENT_FREQUENCIES.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
            {/* {item.description && (
              <FormDescription>{item.description}</FormDescription>
            )} */}
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
