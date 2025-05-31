import { useEffect,useState } from "react"
import { products } from "../products"

import ProductoList from "./ProductoList"
import "./styles.css"

function Catalogo() {

  const [productos,setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      },2000)
    })
    fetchProductos.then((data) => {
      setProductos(data)
    })
  },[])

  return (
    <div className="container">
      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ProductoList productos={productos} />
      )}
    </div>

    /* <div id="container">
      {products.map(prod=>(
        <Producto key={prod.id}{...prod}/>
      ))}
    </div> */
  )
}

export default Catalogo