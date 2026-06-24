import { Navigate } from "react-router-dom"
import { useStore } from '../store/useStore'

const ProtectedRoute = ({ children }) => {
    const user = useStore((state) => state.user)

    const isRegistered = user.name && user.uesrname && user.email && user.mobile 

    return isRegistered ? children : <Navigate to="/" replace/>
}

export default ProtectedRoute