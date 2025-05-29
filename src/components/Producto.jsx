
import { Link } from "react-router-dom"
import "./styles.css"

function Producto({producto,precio,imagen,id}) {
  return (
    <Link to={`/catalogo/${id}`} className="card">
      <h3>{producto}</h3>
      <h3>{imagen}</h3>
      <h3>Precio: ${precio}</h3>
    </Link>
  )
}

export default Producto