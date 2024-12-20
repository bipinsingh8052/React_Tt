
import { useState } from "react"
function Trareny_opertor() {
    let [para ,setPara]=useState(false)
    // let [btn,Setbtn]=useState("display");
    // if(!para){
    //     Setbtn("Hidden")
    // }
  return (
    <>
      <div>
      <button onClick={()=>setPara(!para)}>{(para)?"hide":"display"}</button>
      {/* when you do it same task in one button then you use it like it  */}
      {/* <button onClick={()=>setPara(false)}> close</button> */}
    </div>
    {(para)?<h1>time is know it </h1> :"" }
    </>
  )
}

export default Trareny_opertor
