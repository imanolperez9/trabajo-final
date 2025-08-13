import "./Header.css"
import { useAuth } from "../../Context/UserContext"
import { Link } from "react-router-dom"

const Header = () => {

    const   { user , logout } = useAuth()

    const handleLogout = () => {    
        logout()
    }

    return (
        <header style={{ backgroundColor: "lightblue" }}>
            <h1>TIENDA LINCOLN</h1>
            <nav>
                <ul>
                    {
                        user && <> 

                            <li className="btn-inic"><Link className="let-btn-inic" to="/">Inicio</Link></li>
                            <li className="btn-dash"><Link className="let-btn-dash"  to="/Dashboard">Dashboard</Link></li>
                            <button className="btn-close" onClick={handleLogout}>cerrar sesion</button>
                        </>

                    }
            
                    {
                        !user && <>
                            <li className="btn-log"><Link className="let-btn-log" to="/Login">Login</Link></li>
                            <li className="btn-reg" ><Link className="let-btn-reg" to="/Register">Registrate</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}
export { Header }