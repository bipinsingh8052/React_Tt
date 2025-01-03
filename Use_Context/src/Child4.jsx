import { useContext } from "react"
import { C_data } from "./App"
import { send } from "./Child2"


function Child4() {
  let {Main_data,year}=useContext(C_data)
  return (
    <>
    
     <h1>Child4 jsx</h1> 
     <send.Consumer>
      {
        ({data})=>{

          return (
            <h1>All information in {data}</h1>
            // <h1>App jsx information {}</h1>
          )
        }
      }
     </send.Consumer>



     This is the UseContext Used
     <h1>{Main_data}{year}</h1>
     {/* <C_data.Consumer>
      {
        ({Main_data,year})=>{
          return (<h1>information is app {Main_data}{year}</h1>)
        }
      }
     </C_data.Consumer> */}
    </>
  )
}

export default Child4
