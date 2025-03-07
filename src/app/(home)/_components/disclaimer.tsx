"use client";

import * as React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export function Disclaimer() {
  // State
  const [showDisclaimer, setShowDisclaimer] = React.useState(true);

  // Functions
  const closeDisclaimer = (neverShowAgain = false) => {
    setShowDisclaimer(false);
    if (neverShowAgain) {
      localStorage.setItem("showDisclaimer", "false");
    }
  };

  // Effects
  React.useEffect(() => {
    const showDisclaimer = localStorage.getItem("showDisclaimer");
    if (showDisclaimer === "false") {
      setShowDisclaimer(false);
    }
  }, []);

  if (!showDisclaimer) return null;
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Disclaimer</AlertTitle>
      <AlertDescription>
        Withholding is calculated based on the British Columbia tables of
        Canada, income tax. For simplification purposes some variables (such as
        marital status and others) have been assumed. This document does not
        represent legal authority and shall be used for approximation purposes
        only.
        <div className="flex justify-end w-full py-2 gap-2">
          <Button
            size="sm"
            variant="ghost"
            type="button"
            onClick={() => closeDisclaimer(true)}
          >
            Never show again
          </Button>
          <Button size="sm" type="button" onClick={() => closeDisclaimer()}>
            Okay
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
}
