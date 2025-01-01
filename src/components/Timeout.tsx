import { useEffect, useRef, useState } from 'react';
import { useTimeout } from '../hooks/timeout.hook';

export const Timeout = () => {

  const [state, setState] = useState('Default State');

  const callback = () => { 
    setState('Update Value ' + Math.random())
  }
  useTimeout(callback, 5000)


  useEffect(() => {
    
  }, []);
  
  return (
    <>
      <h1>Use Timeout Hook Example</h1>
      <h2>State Value : {state} </h2>
     
    </>
  )
}