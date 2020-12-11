import React, { useContext } from 'react'

import './index.scss'
import { ThemeStyle } from '../../Context/darkMode'

export default function Contact() {
    const themeStyle = useContext(ThemeStyle)
    

    let theme = {}
    
    if(themeStyle.themee === "light"){
      theme = {
        background: "#FFF",
        color: "#0F0F12"
      }
    }
    else {
      theme = {
        background: "#0F0F12",
        color:"#FFF"
      }
    }
    return (
        <div className="contact mt-5 ml-3 mt-5" style={theme}>
            
                <div className="row">
                    <div className="col-lg-6 col-md-12 pr-0 pl-0">
                        <div className="sub pb-5 pl-3" style={{background : themeStyle.themee === "light" ? "#FFF": "#1F1F25"}}>
                            <h4 className="h3 mb-4">join our <br/>Weekly Newsletter</h4>
                            <form className="form-group">
                                <input type="text" className="form-control mb-3" placeholder="Enter Address" style={{background : themeStyle.themee === "light" ? "#ccc": "#2C2B32", borderLeftColor: themeStyle.themee === "light" ? "#333": "#fff" }} />
                                <button className="btn btn-dark text-uppercase">subscribe</button>
                            </form>
                        </div>
                        <div className="our-contacts pt-5 pb-5 pl-3" style={{background : themeStyle.themee === "light" ? "#efefef": "#0F0F12"}}>
                            <div className="row">
                                <div className="col-sm-6 p-4">
                                    <h3 className="h2 mb-3">
                                        Our Contacts
                                    </h3>
                                    <span className="mb-3 d-block">info@demolink.org</span>
                                    <span className="mb-3 d-block">1 800 1234 567</span>
                                    <span className="mb-3 d-block">4730 Crystal Springs Dr,<br />Los Angeles, CA 90027</span>
                                </div>
                                <div className="col-sm-6 p-4">
                                    <h3 className="h2 mb-3">
                                    Follow Us
                                    </h3>
                                    <ul className="list-unstyled">
                                        <li className="d-inline-block"><a href="#"  style={{color : themeStyle.themee === "light" ? "#333": "#fff"}}><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="d-inline-block"><a href="#"  style={{color : themeStyle.themee === "light" ? "#333": "#fff"}}><i className="fab fa-twitter"></i></a></li>
                                        <li className="d-inline-block"><a href="#"  style={{color : themeStyle.themee === "light" ? "#333": "#fff"}}><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 pl-0 mb-0">
                        <div className="get-in p-5" style={{background : themeStyle.themee === "light" ? "#ccc": "#2C2B32"}}>
                            <h2 className="h1 font-weight-bold">get in touch</h2>
                            <form className="form-group">
                            <div className="row">
                                <div className="col-lg-6 col-xs-12 mb-4 mt-4">
                                    <span className="h3 font-weight-bold d-block">name</span>
                                    <input style={{background : themeStyle.themee === "light" ? "#ccc": "#2C2B32"}} className="form-control" type="text" placeholder="Type Ur Name here" />
                                </div>
                                <div className="col-lg-6 col-xs-12 mb-4 mt-4">
                                    <span className="h3 font-weight-bold d-block">email</span>
                                    <input style={{background : themeStyle.themee === "light" ? "#ccc": "#2C2B32"}} className="form-control" type="email" placeholder="Type Ur Email here" />
                                </div>
                                <div className="col-12 mb-4 mt-4">
                                    <span className="h3 font-weight-bold d-block">message</span>
                                    <textarea style={{background : themeStyle.themee === "light" ? "#ccc": "#2C2B32"}} className="form-control" type="text" placeholder="Type Ur Message" />
                                </div>
                            </div>
                            <button style={{color : themeStyle.themee === "light" ? "#333": "#fff" , borderColor: themeStyle.themee === "light" ? "#333": "#fff"}} className="btn btn-dark">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}
