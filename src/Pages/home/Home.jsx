import { useEffect, useState } from "react"
import "./home.css"
import { Layout } from "../../Components/Layout"
import { useAuth } from "../../Context/UserContext"

const Home = () => {
  const [products, setProducts] = useState([])


  const [editProduct, setEditProduct] = useState(null)

  const [showpopup, setShowPopup] = useState(null)

  const [titleEdit, setTitleEdit] = useState("")

  const [priceEdit, setPriceEdit] = useState("")

  const [descriptionEdit, setDescriptionEdit] = useState("")

  const [categoryEdit, setCategoryEdit] = useState("")

  const [imageEdit, setImageEdit] = useState("")



  const { user } = useAuth()


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
    setShowPopup(true)
    setEditProduct(product)

    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)
  }



  const handleUpdate = async (e) => {
    e.preventDefault()

    const updateProduct = {
      id: editProduct.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit,
    }



    try {
      const response = await fetch(`https://fakestoreapi.com/products/${editProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateProduct)
      })

      if (response.ok) {
        const data = await response.json()
        setProducts(prevProducts =>
          prevProducts.map((product) =>
            product.id === editProduct.id
              ? data
              : product
          ))
      }

      setShowPopup(false)

    } catch (error) {
      console.log(error)
    }



  }
  return (
    <Layout >
      <div>
        
        <section className=" presentacion">
          <div className="item">
          <h1>Ropa para Adultos</h1>
          <p>Explorá nuestra colección de ropa diseñada para ofrecer comodidad, estilo y elegancia. Disponemos de variedad de talles, colores y estilos para todas las temporadas.</p>
</div>
<div className="item">
          <h1>Joyas Exclusivas</h1>
          <p>Descubrí nuestras joyas seleccionadas para realzar tu estilo. Piezas únicas, pensadas para cada ocasión: desde lo cotidiano hasta lo más sofisticado.</p>
        </div>
        </section>


        {
          showpopup && <section className="edit-product">
            <h2>editando el producto..</h2>
            <button onClick={() => setShowPopup(null)}>cerrar edicion</button>
            <form onSubmit={handleUpdate}>

              <label> nombre de producto</label>
              <textarea className="name-product"
                type="text"
                placeholder="cambia el titulo"
                value={titleEdit} onChange={(e) =>
                  setTitleEdit(e.target.value)} >
              </textarea>

              <label>precio</label>
              <input type="number"
                placeholder="cambia el precio"
                value={priceEdit} onChange={(e) =>
                  setPriceEdit(e.target.value)} />

              <label >descripcion</label>
              <textarea
                placeholder="cambia la descripcion"
                value={descriptionEdit} onChange={(e) =>
                  setDescriptionEdit(e.target.value)} >
              </textarea>

              <label>categoria</label>
              <input type="text"
                placeholder="ingrese la categoria"
                value={categoryEdit} onChange={(e) =>
                  setCategoryEdit(e.target.value)} />

              <label>url de la imagen</label>
              <input type="url"
                placeholder="ingrese url de la imagen"
                value={imageEdit} onChange={(e) =>
                  setImageEdit(e.target.value)} />
              <button>actualizar</button>


            </form>
          </section>
        }


        <div className=" productos">
          {
            products.map((product) => <div key={product.id} className="prod-item">
              <h2 key={product.id}
               className="title-prod">{product.title}</h2>
              <img className="img-prod" src={product.image} alt={`Imagen ${product.title}`} />
              <h3 className="desc-prod">{product.description}</h3>
              <p className="price-prod">${product.price}</p>
              {
                user && <div>
                  <button className="act-prod" onClick={() => handleOpenEdit(product)}>actualizar</button>
                  <button className="del-prod" onClick={() => handleDelete(product.id)}>borrar</button>
                </div>
              }
            </div>
            )
          }
        </div>

        <section className=" eleginos">
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


        <section >
          <h2>Comprá con Confianza</h2>
          <p>En tienda Lincoln nos enfocamos en brindarte una experiencia de compra segura, cómoda y confiable.</p>

        </section>

      </div>

    </Layout>
  )
}
export { Home }