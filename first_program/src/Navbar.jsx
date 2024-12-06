import './Navbar.css'

function Navbar() {
  return (
    <>
    <div>
      <nav>
        <h1>logo</h1>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>service</li>
            <li>About</li>
        </ul>
      </nav>
    </div>
    <div className='hero'>
      <marquee behavior="auto" direction="left"><h1>My world</h1></marquee>
      <marquee behavior="auto" direction="right-left"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi consequatur neque debitis a saepe rerum, reprehenderit hic obcaecati repudiandae, officia cupiditate at, nihil doloribus deserunt adipisci corporis asperiores animi distinctio.</p></marquee>
    </div>
    </>
  )
}


export default Navbar
