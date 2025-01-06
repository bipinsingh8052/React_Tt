import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar"
import Contact from './Contact'
import About from './About'
// import Home from "../Home"



function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar/>} >
       <Route index element={<Home/>} />
       {/* <Route index element={<About/>}/>
       <Route index element={<Contact/>} /> */}
       <Route path="about" element={<About/>} />
       <Route path="contact" element={<Contact/>} />

      </Route>
    </Routes>
 

    </>
  )
}

export default App
