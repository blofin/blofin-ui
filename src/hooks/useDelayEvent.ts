import { useEffect, useRef, useState } from "react";

const useDelayEvent = <T>(initialValue: T, delay: number, isDelay = true, delayPositive = false) => {
  const [state, setState] = useState(initialValue);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const setDelayedState = (newValue: T) => {
    if (!isDelay) {
      setState(newValue);
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if ((newValue && !delayPositive) || (!newValue && delayPositive)) {
      setState(newValue);
    } else {
      timeoutRef.current = setTimeout(() => {
        setState(newValue);
      }, delay);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return [state, setDelayedState] as const;
};

export default useDelayEvent;
