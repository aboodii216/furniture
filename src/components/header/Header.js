import React, { useContext } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import c1 from '../../images/slider/slider-2.jpg'
import c2 from '../../images/slider/slider-3.jpg'
import c3 from '../../images/slider/slider-4.jpg'
import './Index.scss'
import LeftNav from './leftNav/LeftNav';
import { ThemeStyle } from '../../Context/darkMode';

export default function Header() {
    const themeStyle = useContext(ThemeStyle)
    let theme = {}
    
    if(themeStyle.themee === "light"){
      theme = {
        background: "#fff",
        color: "#1F1F25"
      }
    }
    else {
      theme = {
        background: "#1F1F25",
        color:"#FFF"
      }
    }
    return (
        <div className="header pb-2" style={theme}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1">
                        <LeftNav />
                    </div>
                    <div className="col-md-10">
                        <div className="carousel">
                            <OwlCarousel
                                className="owl-theme"
                                loop
                                items="1"
                                // autoplay
                                dots={false}
                                smartSpeed="450"
                            >
                                <div class="item"><img src={c1} alt="1"/></div>
                                <div class="item"><img src={c2} alt="2"/></div>
                                <div class="item"><img src={c3} alt="3"/></div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="right-header">
                            <div className="icons mt-5">
                                <i className="fas fa-moon" onClick={themeStyle.toggleTheme}></i>
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
