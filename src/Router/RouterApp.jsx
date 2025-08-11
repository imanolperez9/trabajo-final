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
            <Route path="/"   element={<Home />} />
            <Route path="/Login"    element={<Login />} />
            <Route path="/Dashboard"element={<Dashboard />} />
            <Route path="/Register" element={<Register />} />
            <Route path="*"         element={ <NotFound />}/>

        </Routes>
        </BrowserRouter>
    )
} 
export  { RouterApp }