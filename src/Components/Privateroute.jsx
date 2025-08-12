
import  { Navigate } from "react-router-dom"
import  { useAuth } from "../Context/UserContext"

const PrivateRoute = ({ Children }) =>  {

const   { user } = useAuth()

if (!user)  {
    return <Navigate to="/login" replace/>
}

return Children
}

export  { PrivateRoute }