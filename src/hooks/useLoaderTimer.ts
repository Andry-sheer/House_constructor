
import { useState, useEffect } from "react";

export function useLoaderTimer(initialLoadingTime = 1000, hideDelay = 1000) {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsLoading(false);
      const timer2 = setTimeout(() => {
        setShowLoader(false);
      }, hideDelay);

      return () => clearTimeout(timer2);
    }, initialLoadingTime);

    return () => clearTimeout(timer1);
  }, [initialLoadingTime, hideDelay]);

  return { isLoading, showLoader };
}
