import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { LanguageSwitcher } from "./components/language-switcher";
import { ThemeSwitcher } from "./components/theme-switcher";

export function AppBar() {
  return (
    <header className="mb-4">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between gap-3">
          <Logo />
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/akhan-94/tax-calculator"
                target="_blank"
              >
                <GithubIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
}
