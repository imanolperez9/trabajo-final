import { useState } from "react"
import "./dashboard.css"
import { Layout } from "../../Components/Layout"

const Dashboard = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [product, setProducts] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        if (!name || !price || !description) {
            setError("completar todos los campos")
            return
        }
        if (name.length < 3) {
            setError("el nombre debe incluir al menos 4 caracteres")
            return
        }


        const newProducts = {
            id: crypto.randomUUID(),
            title: name,
            userId: "id del cliente",
            price: price,
            description: description,
            category: "",
            image: ""
        }
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newProducts)

        })
        const data = await response.json()

        setProducts(data)
        setName("")
        setPrice("")
        setDescription("")

    }


    return (
        <Layout >
            <h1>panel de administracion</h1>
            <section>
                <h2>cargar nuevo producto</h2>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label> nombre del producto</label>
                        <input type="text"
                         name="name" onChange={(e) =>
                          setName(e.target.value)} 
                          value={name} />
                    </div>

                    <div>
                        <label>precio</label>
                        <input type="number"
                         name="price" onChange={(e) => 
                         setPrice(e.target.value)}
                          value={price} />
                    </div>

                    <div>
                        <label>descripcion</label>
                        <textarea name="description" 
                        rows="4" 
                        onChange={(e) => 
                        setDescription(e.target.value)} 
                        value={description} />
                    </div>
                    {
                        error && <p>{error}</p>
                    }
                    <button>guardar producto</button>
                </form>
                {
                    product && <div>
                        <p> {product.title}</p>
                        <p> {product.price}</p>
                        <p> {product.description}</p>


                    </div>
                }
            </section>


        </Layout>
    )
}
export { Dashboard }