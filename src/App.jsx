import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // react-slick'i ekliyoruz
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import {
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    Toolbar
} from "@mui/material";

function App() {
    const [isSpan, setIsSpan] = useState(false); // isSpan durumunu tanımladık
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(isLoggedIn, 'DENEME');

    const changeSpan = () => {
        setIsSpan(!isSpan);
    };

    const settings = {
        // Slider ayarları
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Box>
            {/* Navigasyon ve AppBar */}
            <AppBar position="static">
                <Toolbar>
                    <div style={{ borderRadius: "5px", margin: "1%", color: "deeppink" }}>
                        <a href="#hakkımda" style={{ color: "white", textDecoration: "none" }}>Hakkımda</a>
                    </div>
                    <div style={{ borderRadius: "5px", margin: "1%", color: "deeppink" }}>
                        <a href="#galeri" style={{ color: "white", textDecoration: "none" }}>Galeri</a>
                    </div>
                    <div style={{ borderRadius: "5px", margin: "1%", color: "deeppink" }}>
                        <a href="#iletisim" style={{ color: "white", textDecoration: "none" }}>İletişim</a>
                    </div>
                    <div style={{ marginLeft: "auto", marginRight: "1%" }}>
                        <a href="#hebidayagit" style={{ color: "white", textDecoration: "none" }}>Hebida</a>
                    </div>
                </Toolbar>
            </AppBar>

            {/* Başlık */}
            <Box sx={{
                width: "100%",
                backgroundColor: "deeppink",
                color: "white",
                fontSize: "30px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <span>Hevida Nur Uludağ</span>
            </Box>

            {/* Slider */}
            <Box sx={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>
                <Slider {...settings} id="anasayfa">
                    <div>
                        <img src="/slider1.jpg" alt="Slide 1" style={{ width: "100%", height: "500px" }} />
                    </div>
                    <div>
                        <img src="/slider2.jpeg" alt="Slide 2" style={{ width: "100%", height: "500px" }} />
                    </div>
                    <div>
                        <img src="/slider3.jpg" alt="Slide 3" style={{ width: "100%", height: "500px" }} />
                    </div>
                </Slider>
            </Box>

            {/* Hakkımda Bölümü */}
            <Box sx={{
                width: "100%",
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px"
            }}>
                <Card sx={{
                    backgroundColor: "pink",
                    borderRadius: "10px",
                    height: "300px",
                    width: "70%",
                    padding: "20px",
                    overflow: "visible",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <CardContent sx={{
                        backgroundColor: "deeppink",
                        marginLeft: "-70px",
                        width: "20%",
                        height: "70%",
                        borderRadius: "10px"
                    }}>
                        <img src="/hevidapr.png" style={{ width: "100%", height: "100%", borderRadius: "10px" }} alt="Profil" />
                    </CardContent>
                    <CardContent id="hakkımda" sx={{ height: "90%", width: "70%" }}>
                        <Box>
                            <h1 style={{ color: "red" }}>Hakkımda</h1>
                            <h6 id="haltı">
                                Merhaba! Ben Hevida, JavaScript alanında uzmanlaşmak isteyen bir blog yazarıyım. Bu blogda, hem yazılım hem de kendi yaşantım hakkında yazılar paylaşacağım.
                            </h6>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            {/* Galeri Bölümü */}
            <Box id="galeri" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <Card sx={{ margin: "10px", width: "30%" }}>
                    <CardContent sx={{ backgroundColor: "deeppink", textAlign: "center" }}>
                        <h3 id="h3style">img 1</h3>
                        <img src="/img1.jpg" id="hebidaImgStyle" style={{ width: "100%" }} alt="img1" />
                    </CardContent>
                </Card>

                <Card sx={{ margin: "10px", width: "30%" }}>
                    <CardContent sx={{ backgroundColor: "deeppink", textAlign: "center" }}>
                        <h3 id="h3style">img 2</h3>
                        <img src="/tavsan.jpg" id="hebidaImgStyle" style={{ width: "100%" }} alt="tavsan" />
                    </CardContent>
                </Card>

                <Card sx={{ margin: "10px", width: "30%" }}>
                    <CardContent sx={{ backgroundColor: "deeppink", textAlign: "center" }}>
                        <h3 id="h3style">img 3</h3>
                        <img src="/img3.jpg" id="hebidaImgStyle" style={{ width: "100%" }} alt="img3" />
                    </CardContent>
                </Card>

                <Card sx={{ margin: "10px", width: "30%" }}>
                    <CardContent sx={{ backgroundColor: "deeppink", textAlign: "center" }}>
                        <h3 id="h3style">img 4</h3>
                        <img src="/img2.jpg" id="hebidaImgStyle" style={{ width: "100%" }} alt="img2" />
                    </CardContent>
                </Card>
            </Box>

            {/* Footer Bölümü */}
            <footer id="iletisim">
                <Box sx={{ marginTop: "20px", textAlign: "center" }}>
                    {isSpan && (
                        <Box sx={{ marginTop: "10px" }}>
                            <a id="aetiketi" href="https://www.instagram.com/hevidanur_uludag/" style={{ marginRight: "8px", color: "deeppink" }}>
                                <BsInstagram style={{ marginRight: "8px" }} />Instagram
                            </a>

                            <a id="aetiketi2" href="https://www.whatsapp.com/" style={{ color: "deeppink" }}>
                                <FaWhatsapp style={{ marginRight: "8px" }} />Whatsapp
                            </a>
                        </Box>
                    )}
                    <Button onClick={changeSpan} sx={{ color: "deeppink" }}>
                        {isSpan ? 'Gizle' : 'Daha fazla oku'}
                    </Button>
                </Box>
            </footer>
        </Box>
    );
}

export default function Root() {
    return (
        <Router>
            <Routes>
                {/* Eğer kullanıcı giriş yaptıysa Home'a yönlendirilir, aksi halde Login gösterilir */}
                <Route path="/" element={localStorage.getItem("isLoggedIn") ? <App /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}
