import "./login.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/App.jsx");
    };

    return (
        <div className="app">
            <h1>Merhaba</h1>
            <Login onNavigate={handleRedirect} />
        </div>
    );
}

function Login({ onNavigate }) {
    return (
        <div className="login-container">
            <h2>Giriş Yap</h2>
            <form>
                <input
                    type="text"
                    placeholder="Kullanıcı Adı"
                    className="input-field"
                    required
                />
                <input
                    type="password"
                    placeholder="Şifre"
                    className="input-field"
                    required
                />
                <button type="submit" className="login-button">
                    Giriş Yap
                </button>
            </form>
            <div className="help-links">
                <a href="#">Şifremi Unuttum</a> | <a href="#">Kayıt Ol</a>
            </div>
            <button onClick={onNavigate} className="navigate-button">
                Ana Sayfaya Git
            </button>
        </div>
    );
}

export default App;
