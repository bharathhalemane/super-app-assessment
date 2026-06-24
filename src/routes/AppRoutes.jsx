import {BrowserRouter, Routes, Route} from "react-router-dom"

import Register from "../pages/Register/Register"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register/>}/>
            </Routes>
        </BrowserRouter>            
    )
}

export default AppRoutes