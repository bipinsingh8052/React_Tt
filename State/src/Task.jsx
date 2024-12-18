import { useState } from 'react';
import './Task.css'
export default function Task() {
    const [Blue, setblue]= useState("white");

    function blue(){
        setblue("blue");
        let a = Blue;
        console.log(a);
        
        
    }
    function Red(){
        setblue("red");
        let a = Blue;
        console.log(a);
        
    }
    function Yellow(){
        setblue("yellow");
        let a = Blue;
        console.log(a);
        
    }
    function green(){
        setblue("green");
        let a = Blue;
        console.log(a);
        
        
        
    }
  return (
    <>
     <div className="conatienr" style={{backgroundColor:{Blue}}}>
        </div> 
        <div className="buttons">
            <button onClick={Red}>Red</button>
            <button onClick={blue}>Blue</button>
            <button onClick={Yellow}>Yellow</button>
            <button onClick={green}>Green</button>
        </div>
    </>
  )
}
