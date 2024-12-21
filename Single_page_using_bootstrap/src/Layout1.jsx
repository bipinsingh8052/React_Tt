import { Link,Outlet } from "react-router-dom"


function Layout(){
    return(
        <>
            <nav className="navbar">
                <h1>Logo</h1>
                <ul>
                    <li><Link to='/TestCounter'>Counter</Link></li>
                    <li><Link to='/SecondTestCounter'>Show</Link></li>
                </ul>
            </nav>

            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout