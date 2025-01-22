import { useDispatch, useSelector } from "react-redux"
import { dec, inc } from "./Create_slice";


function App() {
  // you can select the your intital value
  let data = useSelector((s)=>s.counter.value);

  // then you dispatch the value of the action
  let dis =useDispatch();
 

  return (
    <>
    <h1>{data}</h1>
    <button onClick={()=>dis(inc())}>Increment</button>
    <button onClick={()=>dis(dec())}>
      Decrement
    </button>
      
    </>
  )
}

export default App
