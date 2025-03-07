import { APP_SETTINGS } from "@/lib/constants/app-settings";
import { getCurrentYear } from "@/lib/date/get-current-year";

export function Copyright() {
  const currentYear = getCurrentYear();
  return (
    <p>
      &copy; {currentYear} {APP_SETTINGS.siteName}
    </p>
  );
}
