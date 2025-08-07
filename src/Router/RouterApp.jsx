import  {BrowserRouter , Routes , Route} from "react-router-dom"
import  { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Dashboard } from "../Pages/Dashboard"
import { Register } from "../Pages/Register"
import { NotFound } from "../Pages/NotFound"


const RouterApp = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
        </BrowserRouter>
    )
} 
export  { RouterApp }