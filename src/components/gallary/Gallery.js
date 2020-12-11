import React, { useContext } from 'react'
import './index.scss'
import img1 from '../../images/gallary/01.jpg'
import img2 from '../../images/gallary/02.jpg'
import img3 from '../../images/gallary/03.jpg'
import img4 from '../../images/gallary/04.jpg'
import { ThemeStyle } from '../../Context/darkMode'

export default function Gallery() {
    const themeStyle = useContext(ThemeStyle)
    

    let theme = {}
    
    if(themeStyle.themee === "light"){
      theme = {
        background: "#FFF",
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
        <div className="gallary" style={theme}>
            <div className="container">
                <div className="heading">
                    <h2 className="h1 text-center font-weight-bold text-uppercase">Gallery</h2> 
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="image">
                            <img src={img1} alt="img1" />
                            <div className="overlay" style={{background: themeStyle.themee === "light" ? "rgba(256, 256, 256, 0.6)": "rgba(3,3,3,.6)" }}>
                                <i className="fas fa-search fa-2x"></i>
                            </div>
                        </div>
                        <div className="image">
                            <img src={img2} alt="img2" />
                            <div className="overlay" style={{background: themeStyle.themee === "light" ? "rgba(256, 256, 256, 0.6)": "rgba(3,3,3,.6)" }}>
                                <i className="fas fa-search fa-2x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 second">
                        <div className="image">
                            <img src={img3} alt="img3" />
                            <div className="overlay" style={{background: themeStyle.themee === "light" ? "rgba(256, 256, 256, 0.6)": "rgba(3,3,3,.6)" }}>
                                <i className="fas fa-search fa-2x"></i>
                            </div>
                        </div>
                        <div className="image">
                            <img src={img4} alt="img4" />
                            <div className="overlay" style={{background: themeStyle.themee === "light" ? "rgba(256, 256, 256, 0.6)": "rgba(3,3,3,.6)" }}>
                                <i className="fas fa-search fa-2x"></i>
                            </div>
                        </div>
                        <div className="link">
                            <a href="#" style={{color: theme.color }}>View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
