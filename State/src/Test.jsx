import { useState } from "react"


function Test() {
    let [counter,setcounter]=useState(0);
    let [bg,setbg]=useState("white");
    function show(){
        
        setcounter(counter+1);
    }
  return (
    <>
    <div>
      <h1>{counter}</h1>
    <button className="button" onClick={show}>count</button>
    </div>
    <div className="image" style={{backgroundColor:{bg},width:"100vh",height:"100vh",border:"1px solid black"}}>

        <button onClick={()=>setbg("blue")}>Blue</button>
        <button onClick={()=>setbg("red")}>red</button>
        <button onClick={()=>setbg("green")}>green</button>
    </div>
      
    </>
  )
}

export default Test
