import  { Layout } from "../Components/Layout"

const Dashboard= () =>  {
    return(
        <Layout >
            <h1>panel de administracion</h1>
            <section>
                <h2>cargar nuevo producto</h2>
                <form >
                    <div>
                        <label> nombre del producto</label>
                        <input type="text" name="nombre" />
                    </div>

                    <div>
                        <label>precio</label>
                        <input type="text" name="precio" />
                    </div>

                    <div>
                        <label>descripcion</label>
                        <textarea name="descripcion" rows="4"></textarea>
                    </div>
                    <button>guardar producto</button>
                </form>
            </section>


        </Layout>
    )
}
 export     { Dashboard }