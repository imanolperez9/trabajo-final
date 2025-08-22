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

  const [ search , setSearch ] = useState("")



  const { user } = useAuth()


  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()

    setProducts(data)

  }

  // otra forma de cambiar el nombre a los productos
 const remplaces = {
    1: { title: "mochila para laptop (AZUL)", description: "ideal para llevarla a tu lugar de trabajo ." } ,
    2: { title: "remera chomba con botones ", description: "buena calidad y comodidad." } ,
    3: { title: "chaqueta de trabajo (BEIGE)", description: "buena calidad y comodidad." } ,
    4: { title: "remera manga larga  (AZUL)", description: "buena calidad y comodidad." },
    5: { title: "anillo dragon plata", description: "buena calidad" } ,
    6: { title: "anillo arabe plata", description: "buena calidad " } ,
    7: { title: "anillo diamante cuadrado plata", description: "buena calidad " } ,
    8: { title: "arito de plata color bronce", description: "buena calidad " } ,
    9: { title: "wd elements", description: "buena calidad ." } ,
    10: { title: "ssd plus", description: "buena calidad " } ,
    11: { title: "ssd solid state", description: "buena calidad " } ,
    12: { title: "wd solid", description: "buena calidad ." } ,
    13: { title: "monitor hd", description: "buena calidad " } ,
    14: { title: "monitor doble pantalla hd", description: "buena calidad ." } ,
    15: { title: "campera de abrigo (VIOLETA)", description: "buena calidad y comodidad." } ,
    16: { title: "chaqueta de abrigo (NEGRA)", description: "buena calidad y comodidad." } ,
    17: { title: "chaqueta de jean abierta", description: "buena calidad y comodidad." } ,
    18: { title: "remera entre casa (BLANCA)", description: "buena calidad y comodidad." } ,
    19: { title: "remera entre casa (ROJA)", description: "buena calidad y comodidad." } ,
    20: { title: "remera entre casa (VIOLETA)", description: "buena calidad y comodidad." } ,
  }





  const searcher = (e) =>{  
    setSearch(e.target.value)
    console.log(e.target.value)
  }

 const results = !search 
 ?products 
 : products.filter((dato) =>  {
 const remplace = remplaces[dato.id];
  const newTitle = remplace?.title || dato.title || ""
        return newTitle.toLowerCase().includes(search.toLowerCase())
      })

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
           <p>
      Bienvenido a <strong>Tienda Lincoln</strong>, tu espacio ideal para explorar productos
      de calidad en todas las categorías. Descubrí nuestras últimas novedades .
    </p>
        </section>
     <div className="search">
      <input type="text" placeholder="buscar..." className= 'form-control' value={search} onChange={searcher}/>
   
     
     </div>


       
               


        <div className=" productos">
          {
            results.map((product) => {
             const remplace = remplaces[product.id]
            const newTitle = remplace?.title || product.title
            const newDescription =   remplace?.description || product.description
            

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

         {
          showpopup && <section className="edit-product">
            <h2>editando el producto..</h2>
            
            <form onSubmit={handleUpdate}>

              <label> nombre de producto</label>
              <textarea className="name-product"
                type="text"
                placeholder="cambia el titulo"
                value={titleEdit} onChange={(e) =>
                  setTitleEdit(e.target.value)} >
              </textarea>

              <label>precio</label>
              <input className="edit-price" type="number"
                placeholder="cambia el precio"
                value={priceEdit} onChange={(e) =>
                  setPriceEdit(e.target.value)} />

              <label >descripcion</label>
              <textarea className="desc-edit"
                placeholder="cambia la descripcion"
                value={descriptionEdit} onChange={(e) =>
                  setDescriptionEdit(e.target.value)} >
              </textarea>

              <label>categoria</label>
              <input className="cat-edit" type="text"
                placeholder="ingrese la categoria"
                value={categoryEdit} onChange={(e) =>
                  setCategoryEdit(e.target.value)} />

              <label>url de la imagen</label>
              <input className="url-edit" type="url"
                placeholder="ingrese url de la imagen"
                value={imageEdit} onChange={(e) =>
                  setImageEdit(e.target.value)} />
              <button>actualizar</button>
              <button onClick={() => setShowPopup(null)}>cerrar edicion</button>


            </form>
          </section>
        }

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