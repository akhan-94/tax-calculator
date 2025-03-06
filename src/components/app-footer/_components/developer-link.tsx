import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function DeveloperLink() {
  return (
    <div>
      <Link
        className={buttonVariants({ variant: "outline" })}
        href="https://arhamkhan.ca"
        target="_blank"
      >
        Developed by Arham Khan
      </Link>
    </div>
  );
}
