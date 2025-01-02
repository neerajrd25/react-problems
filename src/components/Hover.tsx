import { useClickOutside } from "../hooks/clickoutside.hook";
import { useHover } from "../hooks/hover.hook"

export function Hover() {
  const [ref, isHovered] = useHover<HTMLDivElement>();

  const clickRef = useClickOutside<HTMLDivElement>(() => alert('click outside'));

  return (

    <>
      <div style={{ width: '800px', height: '800px', backgroundColor: 'gray' }}>
        <div ref={ref} style={{
          width: "200px",
          height: "100px",
          backgroundColor: isHovered ? "lightblue" : "lightgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          border: "1px solid black",
        }}>{isHovered ? 'hovered' : 'not hovered'}</div>

        <div ref={clickRef}
          style={{
            width: "200px",
            height: "100px",
            backgroundColor: "white",
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            marginTop: "20px",

          }}>Click outside of it</div>
      </div>
    </>)
}