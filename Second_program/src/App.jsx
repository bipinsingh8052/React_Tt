import Child from "./Child"

let a =prompt("enter you Name");
  let b =prompt("Enter the age");
  let c=prompt("Enter the ID no");
function App() {
  
  
  return (
    <>
      <h1>npm </h1>
      <Child Name={a} Age={b}  id={c} />
    </>
  )
}

export default App
