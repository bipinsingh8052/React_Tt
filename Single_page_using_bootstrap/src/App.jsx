import {Route ,Routes} from "react-router-dom"
import SecondTestCounter from "./SecondTestCounter"
import TestCounter from "./TestCounter"


function App() {


  return (
    <>
    {/* <Routes>
      <Route path="/" element={<TestCounter/>}/> */}
      <TestCounter/>
      {/* <Route path="/" element={<SecondTestCounter Name="bipin singh" age="89"/>}/> */}
      <SecondTestCounter Name="Bipinsingh" age=" 78"/>
    {/* </Routes>
       */}



{/* <Routes>
        <Route path='/' element={<Layout1 />}>
          <Route path='/counter' element={<TestCounter/>} />
          <Route path='/show' element={<SecondTestCounter fname={name} age1={age} />}/>
        </Route>
        </Routes> */}
    </>
  )
}

export default App
