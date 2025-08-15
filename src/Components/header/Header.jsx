import "./Header.css"
import { useAuth } from "../../Context/UserContext"
import { Link } from "react-router-dom"

const Header = () => {

    const { user, logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <header >
            <h1 className="principio">TIENDA LINCOLN</h1>
            <nav>
                <ul className="all-btns" >
                    {
                        user && <  >

                            <div className="links">
                                <li className="btn-inic"><Link className="let-btn-inic" to="/">Inicio</Link></li>
                                <li className="btn-dash"><Link className="let-btn-dash" to="/Dashboard">Dashboard</Link></li>
                            </div>
                            <div>
                                <button className="btn-close" onClick={handleLogout} >cerrar sesion</button>
                            </div>
                        </>

                    }

                    {
                        !user && <>
                            <div className="links" >
                                <li className="btn-log"><Link className="let-btn-log" to="/Login">Login</Link></li>
                                <li className="btn-reg" ><Link className="let-btn-reg" to="/Register">Registrate</Link></li>
                            </div>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}
export { Header }