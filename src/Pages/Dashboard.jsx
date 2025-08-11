import { useState } from "react"
import { Layout } from "../Components/Layout"

const Dashboard = () => {

    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()

    const handleSubmit = (e) => {
        e.preventDefaul()

        const newProducts = {
            id: crypto.randomUUID(),
            name: name,
            userId: "id del cliente" , 
            price: price,
            description: description ,

        }

    }


    return (
        <Layout >
            <h1>panel de administracion</h1>
            <section>
                <h2>cargar nuevo producto</h2>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label> nombre del producto</label>
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <label>precio</label>
                        <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div>
                        <label>descripcion</label>
                        <textarea name="description" rows="4" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <button>guardar producto</button>
                </form>
            </section>


        </Layout>
    )
}
export { Dashboard }