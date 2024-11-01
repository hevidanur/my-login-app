import "slick-carousel/slick/slick.css";
import '../css/login.css'
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Snackbar, Alert } from "@mui/material";

function LoginApp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);

    // Yeni eklenen durum değişkenleri
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if(storedUser && username === storedUser.username && password === storedUser.password){
            console.log("Giriş başarılı");
            navigate('/');
        } else {
            setAlertMessage("Kullanıcı adı veya şifre yanlış");
            setAlertOpen(true);
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            setAlertMessage("Şifreler eşleşmiyor");
            setAlertOpen(true);
            return;
        }
        const newUser = { username, password };
        localStorage.setItem('user', JSON.stringify(newUser));
        setAlertMessage("Kayıt başarılı");
        setAlertOpen(true);
        setIsRegistering(false);
        setUsername("");
        setPassword("");
        setPasswordConfirm("");
    };

    // Alert'i kapatma fonksiyonu
    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    return (
        <Box className="container" sx={{backgroundColor:"deeppink", width:"100%",height:"100vh",display:"flex",alignItems:"center", justifyContent:"center"}}>
            <div className="login-container">
                {isRegistering ? (
                    <form onSubmit={handleRegister}>
                        <h2>Kayıt Ol</h2>
                        <input
                            type="text"
                            placeholder="Kullanıcı Adı"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Şifre"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Şifre Tekrar"
                            className="input-field"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required
                        />
                        <button type="submit" className="login-button">
                            Kayıt Ol
                        </button>
                        <div className="help-links">
                            <span>Zaten hesabınız var mı? </span>
                            <a href="#" onClick={() => setIsRegistering(false)}>Giriş Yap</a>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleLogin}>
                        <h2>Giriş Yap</h2>
                        <input
                            type="text"
                            placeholder="Kullanıcı Adı"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Şifre"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="login-button">
                            Giriş Yap
                        </button>
                        <div className="help-links">
                            <a href="#">Şifremi Unuttum</a> |
                            <a href="#" onClick={() => setIsRegistering(true)}>Kayıt Ol</a>
                        </div>
                    </form>
                )}
                {/* Snackbar ve Alert bileşenleri */}
                <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
                        {alertMessage}
                    </Alert>
                </Snackbar>
            </div>
        </Box>
    );
}

export default LoginApp;
