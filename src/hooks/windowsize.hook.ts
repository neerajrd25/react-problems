import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowDimensions, setWindowDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        height: innerHeight,
        width: innerWidth
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [])



  return windowDimensions;
}