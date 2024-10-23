import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // react-slick'i ekliyoruz

import { AppBar, Box, Button, Card, CardContent, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { pink } from '@mui/material/colors';

function App() {
    const settings = {
        dots: true, // Slider altındaki göstergeler
        infinite: true, // Sonsuz döngü
        speed: 500, // Geçiş hızı
        slidesToShow: 1, // Aynı anda gösterilecek slayt sayısı
        slidesToScroll: 1 // Kaydırma başına kaç slayt kayacak test
    };

    const [isSpan, setIsSpan] = useState(false); // Başlangıçta false

    const changeSpan = () => {
        setIsSpan(prev => !prev); // Değeri tersine çevir
    };

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: "white", color: "deeppink" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hevida Nur Uludağ
                    </Typography>
                    <Button sx={{ color: "deeppink" }}>Ana Sayfa</Button>
                    <Button sx={{ color: "deeppink" }}>Hakkında</Button>
                    <Button sx={{ color: "deeppink" }}>Galeri</Button>
                    <Button sx={{ color: "deeppink" }}>İletişim</Button>
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
                <Slider {...settings}>
                    <div>
                        <img src="/slider1.jpg" alt="Slide 1" style={{ width: "100%", height: "400px" }} />
                    </div>
                    <div>
                        <img src="/slider2.jpeg" alt="Slide 2" style={{ width: "100%", height: "400px" }} />
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
                    <CardContent sx={{ height: "70%", width: "70%" }}>
                        <Box>
                            <h1>Hakkımda</h1>
                            <span>
                                Merhaba! Ben Hevida, JavaScript alanında uzmanlaşmak isteyen bir blog yazarıyım. Bu blogda, hem yazılım hem de kendi yaşantım hakkında yazılar paylaşacağım.
                            </span>
                        </Box>
                        <Box sx={{ marginTop: "20px" }}>
                            <Button onClick={changeSpan} sx={{ color: "deeppink" }}>
                                {isSpan ? 'Gizle' : 'Daha fazla oku'}
                            </Button>
                            {isSpan && (
                                <Box sx={{ marginTop: "10px" }}>
                                    <span>Ek Bilgiler: Burada daha fazla bilgi yer alacak.</span>
                                </Box>
                            )}
                        </Box>
                    </CardContent>
                </Card>
            </Box>



            <Card>
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 style={{ backgroundColor: "pink", padding: "20%", textAlign: "center"}}>img 1</h3>
                    <img src="/img1.jpg" style={{
                        backgroundColor: "#fce4ec",
                        width: "220px", height: "210px", borderRadius: "10px", padding: "20%",
                        overflow: "visible", display: "flex",
                        alignItems: "center"
                    }} />
                </CardContent>
            </Card>

<br></br>

            <Card>
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 style={{ backgroundColor: "pink", padding: "20%", textAlign: "center"}}>img 2</h3>
                    <img src="/tavsan.jpg" style={{
                        backgroundColor: "#fce4ec",
                        width: "220px", height: "210px", borderRadius: "10px", padding: "20%",
                        overflow: "visible", display: "flex",
                        alignItems: "center"
                    }} />
                </CardContent>
            </Card>


            <br></br>

            <Card>
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 style={{ backgroundColor: "pink", padding: "20%", textAlign: "center"}}>img 3</h3>
                    <img src="/hevidapr.png" style={{
                        backgroundColor: "#fce4ec",
                        width: "220px", height: "210px", borderRadius: "10px", padding: "20%",
                        overflow: "visible", display: "flex",
                        alignItems: "center"
                    }} />
                </CardContent>
            </Card>

<br></br>

            <Card>
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 style={{ backgroundColor: "pink", padding: "20%", textAlign: "center"}}>img 4</h3>
                    <img src="/img2.jpg" style={{
                        backgroundColor: "#fce4ec",
                        width: "220px", height: "210px", borderRadius: "10px", padding: "20%",
                        overflow: "visible", display: "flex",
                        alignItems: "center"
                    }} />
                </CardContent>
            </Card>
        </Box>

    );
}

export default App;
