import { z } from "zod";

export const OptionsFormSchema = z.object({
  income: z.coerce.number().min(1, {
    message: "Income must be at least 1",
  }),
  paymentFrequency: z.string({
    required_error: "Please select a payment frequency.",
  }),
  province: z.string({
    required_error: "Please select a province.",
  }),
  year: z.coerce.number({
    required_error: "Please select a year.",
  }),
});
