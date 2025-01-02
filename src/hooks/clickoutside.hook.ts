


// This is a React coding question from BFE.dev

import { useRef, useEffect } from 'react'

export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  // your code here
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      console.log(typeof ref.current);
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [callback])
  return ref;
}

// to try your code on the right panel
// export App() component like below

// export function App() {
//   return <div>your app</div>
// }


