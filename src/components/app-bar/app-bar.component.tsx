import { Separator } from "@/components/ui/separator";
import { Logo } from "../logo";
import { ThemeSwitcher } from "./components/theme-switcher";
import { LanguageSwitcher } from "./components/language-switcher";

export function AppBar() {
  return (
    <header className="mb-4">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between gap-3">
          <Logo />
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
}
