import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import First_page from "./First_page"
import Contact from "./Contact"
import About from "./About"


function App() {
  let name ={
    name:"bipinn singh",
    singh:"yadav",
    age:"20",
    place:"allahabad"
  }
 

  return (
    <>
    <Routes >
      <Route path="/" element={<Navbar/>} >
        <Route   index element={<First_page/>}  />
        <Route path="contact" element={<Contact/>} />
        <Route path="about/:name/:age/:place" element={<About/>} />
      </Route>
    </Routes>
     
    </>
  )
}

export default App
