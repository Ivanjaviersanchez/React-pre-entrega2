import { Link , Outlet } from "react-router-dom"
import "./Layout.css"
import logo from "../assets/logo.png"
import CartWidget from "./CartWidget"

function Layout() {
  return (
    <div>

        <nav className="NavStyles">

            <a className="LogoStyles" href="#"><img className="LogoImgStyles" src={logo} alt="logo"/><p>TecnoBox - Soluciones Informáticas</p></a>

            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/nosotros"}>Nosotros</Link>
                </li>
                <li>
                    <Link to={"/catalogo"}>Catálogo</Link>
                </li>
                <li>
                    <Link to={"/contacto"}>Contacto</Link>
                </li>
            </ul>

            <CartWidget/>

        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout