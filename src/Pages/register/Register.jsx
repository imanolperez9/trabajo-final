import { useState } from "react"
import "./register.css"
import { Layout } from "../../Components/Layout"


const Register = () => {
   
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

        setUsername("")
        setEmail("")
        setPassword("")


    }






    return (

        <Layout >
            <h1> registrate</h1>
            <section className="sec-reg">
                <h2>bienvenido a Tienda Lincoln!!</h2>
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