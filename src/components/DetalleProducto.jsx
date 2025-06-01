import { useState } from "react";
import { products } from "../products";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import "./DetalleProducto.css"

/*  MUESTRA LOS DETALLES DE CADA PRODUCTO   */

function DetalleProducto() {
    const {id} = useParams()
    const producto = products.find(prod=>prod.id===parseInt(id))
    const [cantidad,setCantidad] =useState(1);
    const [mensaje, setMensaje] = useState("");

    if (!producto){
        return <h2>El producto seleccionado no existe</h2>
    }

    const incrementar = () => {
      if (cantidad < producto.stock){
        setCantidad(cantidad + 1);
      }
    };
    const decrementar = () => {
      if (cantidad > 1) {
        setCantidad(cantidad - 1);
      }
    };
    const agregarAlCarrito = () => {
      Swal.fire({
            title: '¡Producto agregado!',
            text: `Agregaste ${cantidad} unidad(es) de "${producto.producto}" al carrito.`,
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 3000,
            timerProgressBar: true
      });
    };

  return (
    <div className="cardDetalleProducto">
        <h2>Detalles de producto</h2>
        <h3>Producto: {producto.producto}</h3>
        <h3>{producto.imagen}</h3>
        <h3>Precio: ${producto.precio}</h3>
        <h3>Stock disponible: {producto.stock} unid.</h3>
        <div className="contador">
          <button onClick={decrementar}>-</button>
          <span>{cantidad}</span>
          <button onClick={incrementar}>+</button>
        </div>
        <button className="btnCarrito" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
        {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  )
}

export default DetalleProducto