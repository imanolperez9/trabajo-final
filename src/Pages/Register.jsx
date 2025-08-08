import { useState } from "react"
import  { Layout } from "../Components/Layout"

const Register = () =>  {
    const [username, setUsername] = useState("")
    const [email, setEmail ] = useState ("")
    const [password , setPassword] = useState ("")
    const [error,setError] = useState("")
    const [confirm, setConfirm] = useState("")

const handleSubmit = (e) =>    {
    e.preventDefault()
    setError("")
    setConfirm("")

     setConfirm("usuario registrado")
     setUsername("")
     setEmail("")
     setPassword("")


         
     
    if ( !username || !email || !password )
        setError("debes completar todos los campos")
    return;
}                 
          const newUser =   {
          username,
          email,
          password,

          }
            
          console.log(newUser)

       




    return(
        
        <Layout >
            <h1> registrate</h1>
            <section>
                <h2>bienvenido a Tienda Lincoln!!</h2>
                <form onSubmit={handleSubmit} > 
                    <div>
                        <label>nombre de usuario</label>
                        <input 
                        type="text"
                         onChange={(e) => setUsername(e.target.value) }
                         value={username}/>
                    </div>
                    <div>
                        <label>correo electronico</label>
                        <input 
                        type="email" 
                        onChange={(e) => setEmail (e.target.value)}
                        value={email}
                        />
                        
                    </div>
                    <div>
                        <label>contraseña</label>
                        <input 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                        
                    </div>
                    <button>registrate</button>

                   
                </form>
                    {
                       error && <p style={{color:"red"}}>{error }</p>
                    }
                    {
                        confirm &&<p style={{color:"green"}}>{confirm}</p>
                    }




            </section>

        </Layout>
    )
}
 export     { Register }