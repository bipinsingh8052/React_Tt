import { useState } from 'react';
import './Task.css'
export default function Task() {
    const [Blue, setblue]= useState("white");

    // function blue(){
    //     setblue("blue");
    //     let a = Blue;
    //     console.log(a);
        
        
    // }
    // function Red(){
    //     setblue("red");
    //     let a = Blue;
    //     console.log(a);
        
    // }
    // function Yellow(){
    //     setblue("yellow");
    //     let a = Blue;
    //     console.log(a);
        
    // }
    // function green(){
    //     setblue("green");
    // }
  return (
    <>
     <div className="conatienr" style={{backgroundColor:Blue}}>
     <button onClick={()=>setblue("red")}>Red</button>
            <button onClick={()=>setblue("blue")}>Blue</button>
            <button onClick={()=>setblue("yellow")}>Yellow</button>
            <button onClick={()=>{setblue("green")}}>Green</button>
        </div> 
        {/* <div className="buttons">
            
        </div> */}
    </>
  )
}
