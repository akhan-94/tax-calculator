import { TypographyH1 } from "@/components/ui/typography/h1";
import { Options } from "./_components/options";
import { Results } from "./_components/results";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Options />
        <Results />
      </div>
    </div>
  );
}
