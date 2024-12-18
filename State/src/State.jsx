import  { useState } from 'react'

export default function State() {
    const [count ,setcounter]=useState(0);
    function add(){
        setcounter(count +1);
    }
    function Sub(){
        if(count != 0){
            setcounter(count -1)
        }
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={add}>Increaser</button>
        <button onClick={Sub}>Decrement</button>
      
    </div>
  )
}

// Task
// create div heigh

// 100vh
// width
// 100vh
// create a buttons in color
// when you click the any button that change the div bagc