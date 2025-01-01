import { useEffect, useRef } from 'react';

export function useTimeout(callback: () => void, delay: number) {
  // your code here
   const callbackRef = useRef<any>(null);
  callbackRef.current = callback;

  useEffect(()=>{
    const timeoutId = setTimeout(() => {callbackRef.current()}, delay)
    return ()=> {
      clearTimeout(timeoutId)
    };
  },[delay])
}