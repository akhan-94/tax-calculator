"use client";

import * as React from "react";

export function useGeoLocation() {
  // State
  const [location, setLocation] = React.useState<GeolocationPosition | null>(
    null
  );

  // Functions
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLocation(position);
      });
    }
  };

  // Effects
  React.useEffect(() => {
    getLocation();
  }, []);

  return location;
}
