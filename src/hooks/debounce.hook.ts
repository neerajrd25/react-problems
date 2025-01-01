import { useEffect, useRef, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);
    // console.log('timerId ', timerRef);
    return () => {
      // console.log('clearing timer ', timerRef.current)
      if (timerRef.current !== null) clearTimeout(timerRef.current);
    }
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;