import Navbar from "./Navbar"

// import  './App.css'


export default function App() {

  // internal css in react  but as a object form
  let st={
    backgroundColor:"blue",
    color:"orange"

  }
  return (
    <>
      {/* inline css */}
      <h1 style={{backgroundColor:"red",color:"white"}}>

        hello
      </h1>
      <h2 style={st}>hello world</h2>
      <pre className="header">jskaanjkaeno</pre>
      <Navbar/>
    </>
  )
}

