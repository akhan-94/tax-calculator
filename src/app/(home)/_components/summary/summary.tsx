import { Breakdown } from "./components/breakdown";
import { TaxChart } from "./components/tax-chart";

export function Summary({
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
  return (
    <div className="grid grid-cols-2 gap-4">
      <Breakdown
        federalDeductionAmount={federalDeductionAmount}
        provincialDeductionAmount={provincialDeductionAmount}
        totalTax={totalTax}
        netPay={netPay}
      />
      <TaxChart />
    </div>
  );
}
