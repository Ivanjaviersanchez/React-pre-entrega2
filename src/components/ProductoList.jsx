import { useState } from "react"
import Producto from "./Producto"
import { products } from "../products";

const categories = {
   ACCESORIOS: "Accesorios informaticos",
   MONITORES: "Monitores y pantallas",
   OFICINA: "Oficina varios",
   COMPUTADORAS: "Notebooks y CPU"
}

function ProductoList({productos}) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredProducts = selectedCategory
    ? productos.filter(producto => producto.categoria === selectedCategory)
    : productos;

  return (
    <div>
        <div>
            <button onClick={() => setSelectedCategory(categories.ACCESORIOS)}>
                Accesorios informaticos
            </button>
            <button onClick={() => setSelectedCategory(categories.MONITORES)}>
                Monitores y pantallas
            </button>
            <button onClick={() => setSelectedCategory(categories.OFICINA)}>
                Oficina varios
            </button>
            <button onClick={() => setSelectedCategory(categories.COMPUTADORAS)}>
                Notebooks y CPU
            </button>
        </div>
        {filteredProducts.map(producto => (
            <Producto 
                key={producto.id}
                id={producto.id}
                producto={producto.producto}
                descripcion={producto.descripcion}
                imagen={producto.imagen}
                precio={producto.precio}
            />
        ))}
    </div>
  )
}

export default ProductoList