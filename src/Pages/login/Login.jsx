import  { useState } from "react"
import { Layout } from "../../Components/Layout"
import { useAuth } from "../../Context/UserContext"
import "./login.css"
import  { useNavigate } from"react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log({ username , password })

        const loginOn = await login(username , password)
       
        if (loginOn)    {
        setUsername("")
        setPassword("")
        navigate("/")
        }
    }


    return (
        <Layout >
            <h1>inicia sesion</h1>
            <section>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>nombre de usuario</label>
                        <input type="text"
                            onChange={ (e) =>
                            setUsername(e.target.value) } 
                            value={username} />
                    </div>

                    <div>
                        <label>contraseña</label>
                        <input type="password" 
                         onChange={ (e) =>
                         setPassword(e.target.value)}
                         value={password}/>
                    </div>
                    <button>ingresar</button>
                </form>
            </section>

        </Layout>
    )
}
export { Login }