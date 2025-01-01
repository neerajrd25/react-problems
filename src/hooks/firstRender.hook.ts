import { useEffect, useRef } from 'react';

export function useIsFirstRender() {
  // your code here
  const isFirstRef = useRef(true);

  useEffect(()=>{
    isFirstRef.current = false;

  },[]);
  return isFirstRef.current;
}