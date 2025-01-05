import { useRef } from "react"
import Mouse from "./Mouse";


function App() {
  let a= useRef("");
  console.log(a);
  let count=0;
  // function Change(){
  //   // a.current.innerHTML="MY friend where are you guy's"
      
  //   if(count==0){
  //     a.current.innerHTML="MY friend where are you guy's"
  //     console.log("inn",a);
  //     console.log(a.current.__reactProps$9s212c7709r)
  //     count--;
  //   }
  //   else{
  //     a.current.innerHTML="Hello nmy friends where are you "
  //     console.log("not",a);
  //     count=0;
  //   }

  // }

  // apply it css in ref
  return (
    <>
      
     <div>
      <h1 ref={a}>Hello nmy friends where are you </h1>
      <button onClick={Change}>Click me</button>
     </div>
     <Mouse/>
    </>
  )
}

export default App
