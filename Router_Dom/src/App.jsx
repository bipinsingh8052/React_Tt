import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import First_page from "./First_page"
import Contact from "./Contact"
import About from "./About"


function App() {
 

  return (
    <>
    <Routes >
      <Route path="/" element={<Navbar/>} >
        <Route   index element={<First_page/>}  />
        <Route path="contact" element={<Contact/>} />
        <Route path="about" element={<About/>} />
      </Route>
    </Routes>
     
    </>
  )
}

export default App
