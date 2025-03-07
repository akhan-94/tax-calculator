import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DebugCard({ data }: { data: any }) {
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
