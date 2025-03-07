import { TaxBracketCalculationData } from "@/app/(home)/_components/tax-bracket-breakdown-table";
import { TAX_BRACKETS } from "@/lib/constants/tax-rates";
import type { TaxBracket } from "@/lib/types/tax-rates";

const calculateTax = (brackets: TaxBracket[], income: number) => {
  if (brackets?.length === 0) return { brackets: [], total: 0 };
  return brackets.reduce(
    (acc, bracket, index) => {
      const { start, end, rate } = bracket;
      const adjustedStart = index === 0 ? start : start + 1;
      let taxableIncome = 0;
      let amountOwed = 0;
      if (income >= start) {
        taxableIncome = Math.min(income - adjustedStart, end - adjustedStart);
        amountOwed = taxableIncome * rate;
        acc.total += amountOwed;
      }
      acc.brackets.push({
        start,
        end,
        rate,
        taxableIncome,
        amountOwed,
      });
      return acc;
    },
    {
      brackets: [],
      total: 0,
    } as TaxBracketCalculationData
  );
};

export const calculateFederalDeductions = (income: number, year: number) => {
  const bracketsForYear = TAX_BRACKETS[year].federal;
  return calculateTax(bracketsForYear, income);
};

export const calculateProvincialDeductions = (
  income: number,
  year: number,
  province: string
) => {
  const bracketsForYear = TAX_BRACKETS[year].provincial[province];
  return calculateTax(bracketsForYear, income);
};
