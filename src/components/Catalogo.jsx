import { useEffect,useState } from "react"
import { products } from "../products"
import "./Catalogo.css"
import ProductoList from "./ProductoList"


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
    <div className="catalogoStyles">
      <h2>Catalogo de productos</h2>
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