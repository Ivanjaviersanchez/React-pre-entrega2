import { Link , Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/nosotros"}>Nosotros</Link>
                </li>
                <li>
                    <Link to={"/catalogo"}>Catalogo</Link>
                </li>
                <li>
                    <Link to={"/contacto"}>Contacto</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout