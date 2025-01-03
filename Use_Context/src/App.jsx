import { createContext } from "react"
import Child1 from "./Child1"

  // create   (first you create the data)

  // provider (send the data in the child )
  // consumer (taken a data in child component)
let C_data =createContext();
let Main_data ="happy new year";
let year=2024;
function App() {

  // const newone = {}


  return (
    <>
    <h1>hello</h1>
    <C_data.Provider value={{Main_data,year}}>
       <Child1/>
    </C_data.Provider>
    </>
  )
}

export default App;
export { C_data };
