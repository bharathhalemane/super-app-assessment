import { BrowserRouter, Routes, Route } from "react-router-dom"

import ProtectedRoute from "./ProtectedRoute"
import Register from "../pages/Register/Register"
import Categories from "../pages/Categories/Categories"
import Dashboard from "../pages/Dashboard/Dashboard"
import Movies from "../pages/Movies/Movies"
// import MovieModal from "../pages/test"

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
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path="/movies" element={
                    <ProtectedRoute>
                        <Movies />
                    </ProtectedRoute>
                } />
                <Route path="/movie/:imdbId" element={
                    <ProtectedRoute>
                        
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes