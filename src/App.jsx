/*import logo from './logo.svg';*/
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // react-slick'i ekliyoruz
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import {AppBar, Box, Button, Card, CardContent, IconButton/*, textFieldClasses*/, Toolbar, Typography} from "@mui/material";
import { useState } from "react";
/*import { pink } from '@mui/material/colors';*/
import { FaGithub } from "react-icons/fa";
import './Ballon.css';

/*function HebidaApp() {
    const images = [
        'slider1.jpg',
        'slider2.jpeg',
        'slider3.jpg'];

    return (

        <div>
            <Slider images={images} />
        </div>
    );
}*/





function HebidaApp() {
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


                    <div style={{ borderRadius: "5px", margin: "1%", color: "deeppink" }}>
                        <a href="#anasayfa">Ana Sayfa</a>
                    </div>


                    <div style={{ borderRadius: "5px", margin: "0,50%", color: "deeppink" }}>
                        <a href="#hakkımda" sx={{ color: "deeppink" }}>Hakkımda</a>
                    </div>

                    <div style={{ borderRadius: "5px", margin: "1%", color: "deeppink" }}>
                        <a href="#galeri" sx={{ color: "deeppink" }}>Galeri</a>
                    </div>

                    <div style={{ borderRadius: "5px", margin: "1%", color: "deeppink" }}>
                        <a href="#hebidayagit" sx={{ color: "deeppink" }}>iletişim</a>
                    </div>


                </Toolbar>
            </AppBar>
            <Box sx={{
                width: "100%",
                backgroundColor: "deeppink",
                color: "white",
                fontSize: "165%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><span>Hevida Nur Uludağ</span></Box>
            <Box sx={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>
                <Slider {...settings} id="anasayfa">
                    <div>
                        <img src="/img/slider1.jpg" alt="Slide 1" style={{ width: "100%", height: "500px" }} />
                    </div>
                    <div>
                        <img src="/img/slider2.jpeg" alt="Slide 2" style={{ width: "100%", height: "500px" }} />
                    </div>
                    <div>
                        <img src="/img/slider3.jpg" alt="Slide 3" style={{ width: "100%", height: "500px" }} />
                    </div>
                </Slider>
            </Box>
            <Box sx={{
                width: "100%",
                marginTop: "4%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingY:"30px"

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
                        <img src="/img/hevidapr.png" alt={""} style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
                    </CardContent>
                    <CardContent id="hakkımda" sx={{ height: "90%", width: "70%" }}>
                        <Box>
                            <h1 style={{Color:"red"}}>Hakkımda</h1>
                            <h4 id={"haltı"}>
                                Merhaba! Ben Hevida, JavaScript, daha sonrasında TypeScripthayırrrreeeeeetttnoooooye alanında uzmanlaşmak isteyen bir blog yazarıyım. Bu blogda, hem yazılım hem de kendi yaşantım hakkında yazılar paylaşacağım.
                        </h4>
                        </Box>
                    </CardContent>
                </Card>
            </Box>



            <Card id="galeri">
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 id="h3style">img 1</h3>
                    <img src="/img/img1.jpg" alt={""} id="hebidaImgStyle" />
                </CardContent>
            </Card>

            <br></br>

            <Card>
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 id="h3style">img 2</h3>
                    <img src="/img/tavsan.jpg"alt={""} id="hebidaImgStyle" />
                </CardContent>
            </Card>


            <br></br>

            <Card id="hebidayagit">
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 id="h3style">img 3</h3>
                    <img src="/img/img3.jpg" alt={""} id="hebidaImgStyle" />
                </CardContent>
            </Card>

            <br></br>
            <Card id="hebidayagit">
                <CardContent sx={{ height: "30%", width: "30%", alignItems: "center", backgroundColor: "deeppink" }}>
                    <h3 id="h3style">img 3</h3>
                    <img src="/img/img2.jpg" alt={""} id="hebidaImgStyle"/>
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


                            <a id={"aetiketi3"}
                               href="https://github.com/">
                                <FaGithub style={{marginRight: "8px"}}/>GitHub</a>


                        </Box>
                    )}
                    <Button id={"buttonhover1"} onClick={changeSpan} sx={{color: "deeppink",fontSize:"150%"}}>
                        {isSpan ? 'Gizle' : 'Bizimle iletişime geçin'}
                    </Button>
                </Box>


            </footer>

        </Box>
    );
}

export default HebidaApp;

