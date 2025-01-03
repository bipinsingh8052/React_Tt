import { createContext, useContext } from "react"
import { C_data } from "./App"
import Child3 from "./Child3"

let send = createContext();
let send_data ="child 2 to child 4 in the sending data:";


export default function Child2() {
  let {Main_data,year}=useContext(C_data)
  return (
    <>
      <h2>Child 2 in data</h2>
      this is --UseContext
      <h1>{Main_data}{year}in a App</h1>


      {/* This is context Api */}
        {/* <C_data.Consumer>
        {
            ({Main_data,year})=>{
                return (<h1>{Main_data}int eh {year} in child2 </h1>)
            }
        }
        </C_data.Consumer> */}
        
          <send.Provider value={{send_data}}>
          <Child3 />
          </send.Provider>
    </>


  )
}
export {send}
