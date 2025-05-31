import { products } from "../products";
import { useParams } from "react-router-dom";
import "./DetalleProducto.css"

/*  MUESTRA LOS DETALLES DE CADA PRODUCTO   */

function DetalleProducto() {

    const {id} = useParams()

    console.log(id);

    const producto = products.find(prod=>prod.id===parseInt(id))
    
    if (!producto){
        return <h2>El producto seleccionado no existe</h2>
    }

  return (
    <div className="cardDetalleProducto">
        <h2>Detalles de producto</h2>
        <h3>Producto: {producto.producto}</h3>
        <h3>{producto.imagen}</h3>
        <h3>Precio: ${producto.precio}</h3>
        <h3>Stock disponible: {producto.stock} unid.</h3>
    </div>
  )
}

export default DetalleProducto