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
// johnd, m38rmF$

    return (
        <Layout >
            <h1 className="inicia-sesion">inicia sesion</h1>
            <section className="sec-login">
                <form className="form-login" onSubmit={handleLogin}>
                    <div>
                        <label>nombre de usuario</label>
                        <input className="imputs" type="text"
                            onChange={(e) =>
                            setUsername(e.target.value) } 
                            value={username} />
                    </div>

                    <div>
                        <label>contraseña</label>
                        <input className="imputs" type="password" 
                         onChange={(e) =>
                         setPassword(e.target.value)}
                         value={password}/>
                    </div>
                    <button className="in-btn">ingresar</button>
                </form>
            </section>

        </Layout>
    )
}
export { Login }