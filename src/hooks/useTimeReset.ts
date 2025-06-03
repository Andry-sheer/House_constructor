
import { useEffect } from "react";

export function useResetTimer(param: boolean,  setParam: (param: true | false) => void) {
  useEffect(() => {
    if (!param) return;

    const timer = setTimeout(() => {
      setParam(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [param]);
}