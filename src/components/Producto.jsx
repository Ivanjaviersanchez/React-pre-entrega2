
import { Link } from "react-router-dom"
import "./Producto.css"

function Producto({producto,descripcion,precio,imagen,id}) {
  return (
    <div className="cardProducto">
       <Link to={`/catalogo/${id}`} >
      <h3>{producto}</h3>
      <h3>{descripcion}</h3>
      <h3>{imagen}</h3>
      <h3>Precio: ${precio}</h3>
    </Link>
    </div>
   
  )
}

export default Producto