import { useState } from "react"


export default function TestCounter() {
    let [counter,setcounter]=useState(0)
    function add (){
        setcounter(counter+5);
    }
    function sub(){
        if(counter != 0){
            setcounter(counter -1)
        }
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={add}>Increment</button>
        <button onClick={sub}>Decrement</button>
      
    </div>
  )
}
