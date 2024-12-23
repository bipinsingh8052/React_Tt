import { useEffect, useState } from "react"


function Effect() {
    const[bg,setbg]=useState("black")
    useEffect(()=>{alert("Change the bg color!!!")},[bg]);
  return (
    <div>
        <div style={{width:"100vh",height:"100vh" ,border:"2px solid black",backgroundColor:bg}}>
            <button onClick={()=>setbg("white")}>Red</button>
            <button onClick={()=>setbg("green")}>green</button>
            <button onClick={()=>setbg("orange")}>orange</button>
            <button onClick={()=>setbg("black")}>black</button>
        </div>
      
    </div>
  )
}

export default Effect
