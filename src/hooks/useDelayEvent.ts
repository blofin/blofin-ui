import { useEffect, useRef, useState } from "react";

const useDelayEvent = <T>(initialValue: T, delay: number, isDelay = true) => {
  const [state, setState] = useState(initialValue);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const setDelayedState = (newValue: T) => {
    if (!isDelay) {
      setState(newValue);
      return;
    }

    if (newValue) {
      setState(newValue);
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!newValue) {
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
