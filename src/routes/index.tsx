import { Navigate, Routes, Route } from "react-router";
import HomePage from "../pages/home";

export default function YourRoute() {
    return (
        <Routes>
            <Route path='*' element={<Navigate to={'/'} />} />
            <Route path='/' element={<HomePage />} />
        </Routes>
    )
}