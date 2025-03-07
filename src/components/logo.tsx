import { APP_SETTINGS } from "@/lib/constants/app-settings";
import { CalculatorIcon } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 select-none">
      <div className="bg-zinc-950 dark:bg-white p-2 text-primary-foreground rounded-md ">
        <CalculatorIcon className="w-5 h-5" />
      </div>
      {APP_SETTINGS.siteName}{" "}
      <small className="text-current/50">v{process.env.NEXT_PUBLIC_REACT_APP_VERSION}</small>
    </Link>
  );
}
