import  { Layout } from "../../Components/Layout"
import "./login.css"

const Login = () =>  {
    return(
        <Layout >
            <h1>inicia sesion</h1>
            <section>
                <form >
                    <div>
                        <label>correo electronico</label>
                        <input type="email" />
                    </div>

                    <div>
                        <label>contraseña</label>
                        <input type="password" />
                    </div>
                    <button>ingresar</button>
                </form>
            </section>

        </Layout>
    )
}
 export     { Login }