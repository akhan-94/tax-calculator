import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DebugCard({ data }: { data: unknown }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Debug data</CardTitle>
      </CardHeader>
      <CardContent>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </CardContent>
    </Card>
  );
}
