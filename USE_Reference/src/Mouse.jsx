import { useRef } from "react"

export default function Mouse() {
    let Enter=useRef("");
    
    function EntertheMouse(){
        Enter.current.style.backgroundColor="red";
    }
    function MouseLeave(){
        Enter.current.style.backgroundColor="white";
    }
  return (
    <div>
      <div className="box" ref={Enter} style={{width:"500px",height:"500px",border:"2px solid black"}} onMouseLeave={MouseLeave}  onMouseEnter={EntertheMouse}>
        bimggh
      </div>
    </div>
  )
}
