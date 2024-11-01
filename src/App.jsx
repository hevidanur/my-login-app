<<<<<<< HEAD
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
=======
import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // react-slick'i ekliyoruz
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import {AppBar, Box, Button, Card, CardContent, IconButton, textFieldClasses, Toolbar, Typography} from "@mui/material";
import { useState } from "react";
import { pink } from '@mui/material/colors';

>>>>>>> 0ed444c4c3003b1c97dcf4005dda2343994d5d40

function App() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(isLoggedIn , 'DENEME')

    return (
        <Routes>
            {/* Eğer kullanıcı giriş yaptıysa Home'a yönlendirilir, aksi halde Login gösterilir */}
            {/*<Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />*/}
            <Route path="/" element={ <Home /> } />

<<<<<<< HEAD
            <Route path="/login" element={ <Login />} />
        </Routes>
=======
                    <div style={{ borderRadius: "5px", margin: "1%", color: "deeppink" }}>
                        <a href="#hakkımda" sx={{ color: "deeppink" }}>Hakkımda</a>
                    </div>

                    <div style={{ borderRadius: "5px", margin: "1%", color: "deeppink" }}>
                        <a href="#galeri" sx={{ color: "deeppink" }}>Galeri</a>
                    </div>

                    <div style={{ borderRadius: "5px", margin: "1%", color: "deeppink" }}>
                        <a href="#anasayfa" sx={{ color: "deeppink" }}>iletişim</a>
                    </div>

                    <a href="#hebidayagit">Hebida</a>
                </Toolbar>
            </AppBar>
            <Box sx={{
                width: "100%",
                backgroundColor: "deeppink",
                color: "white",
                fontSize: "30px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><span>Hevida Nur Uludağ</span></Box>
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
                        <img src="/hevidapr.png" style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
                    </CardContent>
                    <CardContent id="hakkımda" sx={{ height: "90%", width: "70%" }}>
                        <Box>
                            <h1 style={{Color:"red"}}>Hakkımda</h1>
                            <h6 id={"haltı"}>
                                Merhaba! Ben Hevida, JavaScript alanında uzmanlaşmak isteyen bir blog yazarıyım. Bu blogda, hem yazılım hem de kendi yaşantım hakkında yazılar paylaşacağım.
                        </h6>
                        </Box>
                    </CardContent>
                </Card>
            </Box>



            <Card id="galeri">
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 id="h3style">img 1</h3>
                    <img src="/img1.jpg" id="hebidaImgStyle" />
                </CardContent>
            </Card>

            <br></br>

            <Card>
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 id="h3style">img 2</h3>
                    <img src="/tavsan.jpg" id="hebidaImgStyle" />
                </CardContent>
            </Card>


            <br></br>

            <Card id="hebidayagit">
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 id="h3style">img 3</h3>
                    <img src="/img3.jpg" id="hebidaImgStyle" />
                </CardContent>
            </Card>

            <br></br>
            <Card id="hebidayagit">
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 id="h3style">img 3</h3>
                    <img src="/img2.jpg" id="hebidaImgStyle" />
                </CardContent>
            </Card>

            <footer>

                <Box sx={{ marginTop: "20px" }}>
                    {isSpan && (
                        <Box sx={{marginTop: "10px"}}>
                            <a id={"aetiketi"} href="https://www.instagram.com/hevidanur_uludag/">
                                <BsInstagram style={{marginRight: "8px"}}/>Instagram</a>

                            <a id={"aetiketi2"}
                               href="https://www.google.com/search?q=whatsapp&rlz=1C1GCEU_trTR1129TR1129&oq=whatsapp&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIMCAEQIxgnGIAEGIoFMg0IAhAAGIMBGLEDGIAEMgoIAxAAGLEDGIAEMg0IBBAAGIMBGLEDGIAEMg0IBRAAGIMBGLEDGIAEMgYIBhBFGDwyBggHEAUYQNIBCDI3NTFqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8">
                                <FaWhatsapp style={{marginRight: "8px"}}/>Whatsapp</a>
                        </Box>
                    )}
                    <Button onClick={changeSpan} sx={{ color: "deeppink" }}>
                        {isSpan ? 'Gizle' : 'Daha fazla oku'}
                    </Button>
                </Box>


            </footer>

        </Box>
>>>>>>> 0ed444c4c3003b1c97dcf4005dda2343994d5d40
    );
}

export default function Root() {
    return (
        <Router>
            <App />
        </Router>
    );
}
