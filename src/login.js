import "./login.css";
import React from 'react';

function app()
{
    return<div className="app">merhaba</div>

}


function Login() {
    return (
        <div className="login-container">
            <h2>Giriş Yap</h2>
            <form>
                <input type="text" placeholder="Kullanıcı Adı" className="input-field" required />
                <input type="password" placeholder="Şifre" className="input-field" required />
                <button type="submit" className="login-button">Giriş Yap</button>
            </form>
            <div className="help-links">
                <a href="#">Şifremi Unuttum</a> | <a href="#">Kayıt Ol</a>
            </div>
        </div>
    );
}


document.querySelector("#git").onclick=function ()
{
    window.location.href="App.jsx";
}

export default Login;

export default app;
