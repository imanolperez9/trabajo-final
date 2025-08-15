
import  { Navigate } from "react-router-dom"
import  { useAuth } from "../Context/UserContext"

const PrivateRoute = ({ children }) =>  {

const   { user } = useAuth()

if (!user)  {
    return <Navigate to="/login" replace/>
}

return children
}

export  { PrivateRoute }