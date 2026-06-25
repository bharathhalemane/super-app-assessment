import { BrowserRouter, Routes, Route } from "react-router-dom"

import ProtectedRoute from "./ProtectedRoute"
import Register from "../pages/Register/Register"
import Categories from "../pages/Categories/Categories"
import Dashboard from "../pages/Dashboard/Dashboard"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/categories" element={
                    <ProtectedRoute>
                        <Categories />
                    </ProtectedRoute>
                } />
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard notes={false} />
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes