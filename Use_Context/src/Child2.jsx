import { C_data } from "./App"


export default function Child2() {
  return (
    <>
      <h2>Child 2 in data</h2>
        <C_data.Consumer>
        {
            (C_data)=>{
                return (<h1>{C_data}2025 in child2 </h1>)
            }
        }
        </C_data.Consumer>
    </>
  )
}
