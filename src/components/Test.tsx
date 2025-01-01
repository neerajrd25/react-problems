import { useState } from "react"
import { useIsFirstRender } from "../hooks/firstRender.hook"

export const Test = () => {
  const [state, setState] = useState('Test');

  return (<>
    <h3>{useIsFirstRender() ? 'First Render!' + state : 'Render 2: For Test Component' + state}</h3>
    <button disabled={!useIsFirstRender()} onClick={()=>{setState('Second Update')}}>Update</button>
  </>
  )
}