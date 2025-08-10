import { useState } from "react"
import { Link } from "react-router-dom"

const Header =() => {

const [user , setUser] = useState(true)

    return(
        <header style={ {backgroundColor:"lightblue"}}>
        <img className="foto" src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-cfc8-622f-909c-47bd7d58d4fa/raw?se=2025-08-05T21%3A19%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=4873263b-1917-5b51-b254-bb6cbe0d1ddb&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-05T03%3A20%3A08Z&ske=2025-08-06T03%3A20%3A08Z&sks=b&skv=2024-08-04&sig=NjZ1VoDTvZCmWdQsiZ27FlJ8/hdG6fcWPYDw3X7%2B/7c%3D" width={300} alt="imagen logo" />
        <nav>
            <ul>
        {
             user &&<>
            
             <li><Link to="/Inicio">Inicio</Link></li>
             <li><Link to="/Dashboard">Dashboard</Link></li>
             <button>cerrar sesion</button>
            </>

        }
      -
            {
                 !user &&<>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Registrate</Link></li>
                </>
            }
           </ul>
        </nav>
        </header>
    )
}
 export     { Header }