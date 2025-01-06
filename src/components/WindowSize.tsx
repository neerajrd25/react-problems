import { useWindowSize } from "../hooks/windowsize.hook"

export const WindowSize = () => {
  const { height, width } = useWindowSize();
  return (
    <>
      <p>Window Size :  height: {height} & width: {width}</p>
    </>
  )
}