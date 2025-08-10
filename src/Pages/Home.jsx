import  { useEffect, useState } from "react"

import  { Layout } from "../Components/Layout"

const Home = () =>  {
  const [products , setProducts] = useState([])

  const [user , setUser] = useState(true)

const fetchingProducts = async () =>  {
  const response = await  fetch("https://fakestoreapi.com/products" ,  {method : "GET"})
const data = await response.json()

setProducts(data)
}

useEffect(() => {
  fetchingProducts()
},[])



    return(
        <Layout >
             <div>
      <h1>Tienda Lincoln- Ropa y Joyas</h1>

      <section>
        <h1>Ropa para Adultos</h1>
        <p>Explorá nuestra colección de ropa diseñada para ofrecer comodidad, estilo y elegancia. Disponemos de variedad de talles, colores y estilos para todas las temporadas.</p>
     
        <h1>Joyas Exclusivas</h1>
        <p>Descubrí nuestras joyas seleccionadas para realzar tu estilo. Piezas únicas, pensadas para cada ocasión: desde lo cotidiano hasta lo más sofisticado.</p>
      </section>
<section>
        {
          products.map((product) =>  <div>
            <h2 key={product.id}>{product.title }</h2>
            <img src= {product.image} alt={`Imagen ${product.title}` }/>
            <h3>{product.description }</h3>
            <p>${product.price }</p>
         {  
             false && <div>
                <button>actualizar</button>
                <button>borrar</button>
              </div>
              }
          </div>   ) 
        }
      </section>
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
 export     { Home }