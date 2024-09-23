import { useEffect, useRef, useState } from "react";

export const useThrottle = <T>(value: T, delay: number) => {
  const [throttledText, setThrottledText] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    if (Date.now() - lastExecuted.current >= delay) {
      lastExecuted.current = Date.now();
      setThrottledText(value);
    } else {
      const throttleTimer = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledText(value);
      }, delay);

      return () => clearTimeout(throttleTimer);
    }
  }, [value, delay]);

  return throttledText; // Return the throttled text
};
