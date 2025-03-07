import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toCurrency } from "@/lib/formatters/to-currency";
import { toPercentage } from "@/lib/formatters/to-percentage";
import { TaxBracket } from "@/lib/types/tax-rates";

type TaxBracketCaluclationItem = TaxBracket & {
  taxableIncome: number;
  amountOwed: number;
};

export type TaxBracketCalculationData = {
  brackets: TaxBracketCaluclationItem[];
  total: number;
};

export function TaxBracketBreakdownTable({
  year,
  title,
  data,
}: {
  year: number;
  title: string;
  data: TaxBracketCalculationData;
}) {
  const { brackets, total } = data;
  const braketsSize = brackets.length;
  const totalFormatted = toCurrency(total);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bracket</TableHead>
              <TableHead className="w-[50px]">Rate</TableHead>
              <TableHead className="text-right">Amount owed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brackets.map((bracket, index) => (
              <BracketTableRow
                bracket={bracket}
                key={bracket.start}
                first={index === 0}
                last={index === braketsSize - 1}
              />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className="text-right">{totalFormatted}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}

function BracketTableRow({
  bracket,
  first,
  last,
}: {
  bracket: TaxBracketCaluclationItem;
  first: boolean;
  last: boolean;
}) {
  const start = toCurrency(bracket.start);
  const end = toCurrency(bracket.end);
  const amountOwed = toCurrency(bracket.amountOwed);
  const rate = toPercentage(bracket.rate);
  return (
    <TableRow>
      <TableCell>
        {first ? (
          <>Up to <strong>{end}</strong></>
        ) : last ? (
          <>Over <strong>{start}</strong></>
        ) : (
          <>From <strong>{start}</strong> to <strong>{end}</strong></>
        )}
      </TableCell>
      <TableCell className="font-medium">{rate}</TableCell>
      <TableCell className="text-right">{amountOwed}</TableCell>
    </TableRow>
  );
}
