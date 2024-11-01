import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(isLoggedIn , 'DENEME')

    return (
        <Routes>
            {/* Eğer kullanıcı giriş yaptıysa Home'a yönlendirilir, aksi halde Login gösterilir */}
            {/*<Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />*/}
            <Route path="/" element={ <Home /> } />

            <Route path="/login" element={ <Login />} />
        </Routes>
    );
}

export default function Root() {
    return (
        <Router>
            <App />
        </Router>
    );
}
