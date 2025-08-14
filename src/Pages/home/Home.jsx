import { useEffect, useState } from "react"
import "./home.css"
import { Layout } from "../../Components/Layout"
import { useAuth } from "../../Context/UserContext"
import "./eleginos.css"

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
            products.map((product) => {
              // Cambio título y descripción solo para todos los productos
              let newTitle = product.title;
              let newDescription = product.description;

              if (product.id === 1) {
                newTitle = "mochila para laptop (AZUL)";
                newDescription = "ideal para llevarla a tu lugar de trabajo .";
              }

              if (product.id === 2) {
                newTitle = "remera chomba con botones (BLANCA Y NEGRA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 3) {
                newTitle = "chaqueta de trabajo (BEIGE)"
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 4) {
                newTitle = "remera manga larga inisex (AZUL)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 5) {
                newTitle = "anillo dragon plata";
                newDescription = "buena calidad";
              }
               if (product.id === 6) {
                newTitle = "anillo arabe plata";
                newDescription = "buena calidad ";
              }
               if (product.id === 7) {
                newTitle = "anillo diamante cuadrado plata ";
                newDescription = "buena calidad ";
              }
               if (product.id === 8) {
                newTitle = "arito de plata color bronce";
                newDescription = "buena calidad ";
              }
               if (product.id === 9) {
                newTitle = "remera chomba con botones (BLANCA Y NEGRA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 10) {
                newTitle = "remera chomba con botones (BLANCA Y NEGRA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 11) {
                newTitle = "remera chomba con botones (BLANCA Y NEGRA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 12) {
                newTitle = "remera chomba con botones (BLANCA Y NEGRA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 13) {
                newTitle = "remera chomba con botones (BLANCA Y NEGRA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 14) {
                newTitle = "remera chomba con botones (BLANCA Y NEGRA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 15) {
                newTitle = "campera de abrigo (VIOLETA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 16) {
                newTitle = "chaqueta de abrigo (NEGRA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 17) {
                newTitle = "chaqueta de jean abierta";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 18) {
                newTitle = "remera entre casa (BLANCA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 19) {
                newTitle = "remera entre casa (ROJA)";
                newDescription = "buena calidad y comodidad.";
              }
               if (product.id === 20) {
                newTitle = "remera entre casa (VIOLETA)";
                newDescription = "buena calidad y comodidad.";
              }

              return (
                <div key={product.id} className="prod-item">
                  <h2 className="title-prod">{newTitle}</h2>
                  <img
                    className="img-prod"
                    src={product.image}
                    alt={`Imagen ${newTitle}`}
                  />
                  <h3 className="desc-prod">{newDescription}</h3>
                  <p className="price-prod">${product.price}</p>

 {
              user && <div>
                <button className="act-prod" onClick={() => handleOpenEdit(product)}>actualizar</button>
                <button className="del-prod" onClick={() => handleDelete(product.id)}>borrar</button>
              </div>
            }
                </div>
              );
            })
          }
         
          <div>
           
          </div>
         

        </div>

        <section className=" eleginos">
          <h2>ELEGINOS..</h2>

         

  <ul className="eleginos-list">
    <li>
      <div className="icon">🎁</div>
      <div>
        <h3>Promociones y Beneficios</h3>
        <p>Aprovechá nuestras promociones especiales, descuentos por temporada y beneficios exclusivos para clientes frecuentes.</p>
      </div>
    </li>

    <li>
      <div className="icon">🚚</div>
      <div>
        <h3>Envíos a todo el país y opciones de pago flexibles</h3>
        <p>Realizá tus compras con comodidad y recibí tus productos en la puerta de tu hogar, pagando como prefieras.</p>
      </div>
    </li>

    
    

    <li>
      <div className="icon">✔️</div>
      <div>
        <h3>Productos de calidad garantizada</h3>
        <p>Seleccionamos cuidadosamente cada producto para asegurar la mejor calidad y durabilidad para vos.</p>
      </div>
    </li>
  </ul>
</section>

<section className="confianza">
  <h2>Comprá con Confianza</h2>
  <p>En Tienda Lincoln nos enfocamos en brindarte una experiencia de compra segura, cómoda y confiable.</p>
  <ul className="confianza-list">
    <li>💳 Pagos 100% seguros</li>
    <li>🔄 Política de devoluciones sencilla</li>
    <li>📦 Seguimiento de tus pedidos en tiempo real</li>
    <li>📞 Atención al cliente rápida y eficiente</li>
  </ul>
        </section>

      </div>

    </Layout>
  )
}
export { Home }