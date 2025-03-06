import { getCurrentYear } from "@/lib/date/get-current-year";

export function Copyright() {
  const currentYear = getCurrentYear();
  return <p>&copy; {currentYear} Tax Calculator</p>;
}
