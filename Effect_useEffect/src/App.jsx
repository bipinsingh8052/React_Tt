import { useEffect, useState } from "react"
import Effect from "./Effect";


function App() {
  // const [count ,setcount]=useState(0);
  // const [t,sett]=useState(false);
  // useEffect(()=>{alert("call!!!!")},[count,t]);

  return (
    <>
      {/* {count}
      {t}
      <button onClick={()=>setcount(count+1)}>Inse</button>
      <button onClick={()=>sett(!t)}>True {count}{t}</button> */}

      <Effect/>
    </>
  )
}

export default App
