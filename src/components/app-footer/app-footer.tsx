import { Separator } from "@/components/ui/separator";
import { Copyright } from "./_components/copyright";
import { DeveloperLink } from "./_components/developer-link";

export function AppFooter() {
  return (
    <footer className="container mx-auto mt-4">
      <Separator />
      <div className="py-4">
        <div className="flex items-center justify-between gap-3">
          <Copyright />
          <DeveloperLink />
        </div>
      </div>
    </footer>
  );
}
