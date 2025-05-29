import { products } from "../products"
import Producto from "./Producto"
import "./styles.css"

function Catalogo() {
  return (
    <div id="container">
      {products.map(prod=>(
        <Producto key={prod.id}{...prod}/>
      ))}
    </div>
  )
}

export default Catalogo