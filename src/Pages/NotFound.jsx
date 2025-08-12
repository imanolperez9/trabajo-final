import { Link } from "react-router-dom"
import  { Layout } from "../Components/Layout"

const NotFound = () =>  {
    return(
        <Layout >
            <h1>pagina no existente</h1>
            <p>verifica la URL o vuelve al inicio</p>
            <Link to="/"> IR AL INICIO</Link>

        </Layout>
    )
}
 export     { NotFound }