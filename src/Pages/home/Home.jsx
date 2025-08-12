import { useEffect, useState } from "react"
import "./home.css"
import { Layout } from "../../Components/Layout"

const Home = () => {
  const [products, setProducts] = useState([])

  const [user, setUser] = useState(true)
  const [editProduct, setEditProduct] = useState(null)
  const [showpopup, setShowPopup] = useState(null)
  const [titleEdit , setTitleEdit] = useState("")
  const [priceEdit , setPriceEdit] = useState("")
  const [descriptionEdit , setDescriptionEdit] = useState("")
  const [categoryEdit , setCategoryEdit] = useState("")
  const [imageEdit , setImageEdit] = useState("")

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()

    setProducts(data)

  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    if (response.ok) {
      setProducts(prevProducts => prevProducts.filter((product) => product.id != id))
    }
  }

  const handleOpenEdit = (product) => {
    setEditProduct(product)
    setShowPopup(true)
    setTitleEdit(product.title)
  }

  const handleUpdate = async () => { }


  return (
    <Layout >
      <div>
        <h1>Tienda Lincoln- Ropa y Joyas</h1>

        <section>
          <h1>Ropa para Adultos</h1>
          <p>Explorá nuestra colección de ropa diseñada para ofrecer comodidad, estilo y elegancia. Disponemos de variedad de talles, colores y estilos para todas las temporadas.</p>

          <h1>Joyas Exclusivas</h1>
          <p>Descubrí nuestras joyas seleccionadas para realzar tu estilo. Piezas únicas, pensadas para cada ocasión: desde lo cotidiano hasta lo más sofisticado.</p>
        </section>
        {
          showpopup && <section className="edit-product">
            <h2>editando el producto..</h2>
            <button onClick={() => setShowPopup(null)}>cerrar edicion</button>
            <form>
              <label> nombre de producto</label>
              <input className="name-product" type="text" placeholder="cambia el titulo"value={titleEdit} />
              <label>precio</label>
              <input type="number" placeholder="cambia el precio" value={priceEdit} />
              <label >descripcion</label>
              <textarea placeholder="cambia la descripcion" value={descriptionEdit}></textarea>
              <label>categoria</label>
              <input type="text" placeholder="ingrese la categoria" value={categoryEdit} />
              <label>url de la imagen</label>
              <input type="url" placeholder="ingrese url de la imagen" value={imageEdit} />
              <button>actualizar</button>
              
              
            </form>
          </section>
        }
        <div className=" productos">
          {
            products.map((product) => <div key={product.id}>
              <h2 key={product.id}>{product.title}</h2>
              <img src={product.image} alt={`Imagen ${product.title}`} />
              <h3>{product.description}</h3>
              <p>${product.price}</p>
              {
                user && <div>
                  <button onClick={() => handleOpenEdit(product)}>actualizar</button>
                  <button onClick={() => handleDelete(product.id)}>borrar</button>
                </div>
              }
            </div>)
          }
        </div>

        <section>
          <h2>ELEGINOS..</h2>

          <ul>
            <li>
              <h2>Promociones y Beneficios</h2>
              <p>Aprovechá nuestras promociones especiales, descuentos por temporada y beneficios exclusivos para clientes frecuentes.</p>
            </li>

            <li>
              <h2>Envíos a todo el país y opciones de pago flexibles.</h2>
            </li>

          </ul>
        </section>

        <section>
          <h2>Comprá con Confianza</h2>
          <p>En tienda Lincoln nos enfocamos en brindarte una experiencia de compra segura, cómoda y confiable.</p>

        </section>

      </div>

    </Layout>
  )
}
export { Home }