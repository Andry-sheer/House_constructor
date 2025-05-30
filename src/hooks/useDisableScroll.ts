
import { useEffect } from "react";

export const useDisableScroll = (shouldDisable: boolean) => {
  useEffect(() => {
    if (shouldDisable) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldDisable]);
};
