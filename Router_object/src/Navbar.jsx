import { Link, Outlet } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <ul>
        <li> <Link to='/' >Home</Link></li>
        <li> <Link to='/about'>About</Link></li>
        <li><Link to='/contact' >conatct</Link></li>
      </ul>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Navbar
