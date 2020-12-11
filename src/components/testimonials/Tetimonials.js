import React, { useContext } from 'react'
import Capital from '../capitalLetter/Capital'
import t1 from '../../images/testimonials/01.jpg'
import t2 from '../../images/testimonials/02.jpg'
import t3 from '../../images/testimonials/03.jpg'

import './index.scss'
import { ThemeStyle } from '../../Context/darkMode'

export default function Tetimonials() {
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
        <div className="testimonias mt-5" style={theme}>
            <div className="container-fluid">
                <div className="head text-center">
                    <Capital letter="w" titleLight="what" titleBold=" people say" />
                </div>
                <div className="testi mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 ">
                            <div className="cart">
                                <div className="imaage">
                                    <img src={t1} alt="t1" />
                                </div>
                                <div className="overlay">
                                    <h2 className='h1'>01</h2>
                                    <span className="name mb-3">Abigail Brown</span>
                                    <p>We were pleased not only with the price but also with the quality of the work done. Thanks to the studio and its designers! It turned out great, we hope for further cooperation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 ">
                            <div className="cart">
                                <div className="imaage">
                                    <img src={t2} alt="t2" />
                                </div>
                                <div className="overlay">
                                    <h2 className='h1'>02</h2>
                                    <span className="name mb-3">Adam Smith</span>
                                    <p>We selected ID Studio because of their specialists’ rigorous design background and education. They did the best job!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 ">
                            <div className="cart">
                                <div className="imaage">
                                    <img src={t3} alt="t3" />
                                </div>
                                <div className="overlay">
                                    <h2 className='h1'>03</h2>
                                    <span className="name mb-3">David Richards</span>
                                    <p>I love these guys! Moved from another state and did not know where to buy custom furniture or order an interior. I was recommended to hire ID, and I hadn’t any regret ever since. Everything I ordered was well done!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
