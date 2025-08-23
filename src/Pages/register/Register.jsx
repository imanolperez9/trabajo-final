import { useState } from "react"
import "./register.css"
import { Layout } from "../../Components/Layout"
import { useAuth } from "../../Context/UserContext"
import { useNavigate } from "react-router-dom"


const Register = () => {

const    { setUser } = useAuth()
   
const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [confirm, setConfirm] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        setConfirm("")






        if (!username || !email || !password) {
            setError("debes completar todos los campos")
            return
        }

        const newUser = {
            username,
            email,
            password

        }

        console.log(newUser)

        setConfirm("usuario registrado")

        setUser(true)

        setUsername("")
        setEmail("")
        setPassword("")

        navigate("/")



    }






    return (

        <Layout >
             <h1 className="bienvenido">bienvenido a Tienda Lincoln!!</h1>
            <h2 className="reg"> registrate</h2>
            
            <section className="sec-reg">
               
                <form className="form-reg" onSubmit={handleSubmit} >
                    <div>
                        <label>nombre de usuario</label>
                        <input className="inputs"
                            type="text"
                            onChange={(e) =>
                                setUsername(e.target.value)}
                            value={username} />
                    </div>
                    <div>
                        <label>correo electronico</label>
                        <input className="inputs"
                            type="email"
                            onChange={(e) =>
                                setEmail(e.target.value)}
                            value={email}
                        />

                    </div>
                    <div>
                        <label>contraseña</label>
                        <input className="inputs"
                            type="password"
                            onChange={(e) =>
                                setPassword(e.target.value)}
                            value={password} />

                    </div>
                    <button className="in-btn">registrate</button>
 {
                    error && <p >{error}</p>
                }
                {
                    confirm && <p>{confirm}</p>
                }

                </form>
               




            </section>

        </Layout>
    )
}
export { Register }