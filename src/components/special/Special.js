import React, { useContext } from 'react'
import Capital from '../capitalLetter/Capital'
import Countdown from 'react-countdown';
import offer from '../../images/offer.png'

import './index.scss'
import { ThemeStyle } from '../../Context/darkMode';

export default function Special() {
    const Completionist = () => <span>You are good to go!</span>;
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
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
            return <Completionist />;
        } else {
          // Render a countdown
        return<div className="row">
                    <div className="col-sm-3 count">{days} 
                        <p>Days</p>
                    </div>
                    <div className="col-sm-3 count">{hours} 
                        <p>Hours</p>
                    </div>
                    <div className="col-sm-3 count">{minutes} 
                        <p>Minutes</p>
                    </div>
                    <div className="col-sm-3 count">{seconds} 
                        <p>Seconds</p>
                    </div>
                </div>;
            }
    };
    return (
        <div className="special mt-5 mb-5" style={theme}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Capital letter="s" titleLight="special" titleBold="offer" />
                        <p>Apply before the end of the promotion and get a 35% discount. Order Your future interior right now.</p>
                        <div className="count-down">
                            <Countdown date={Date.now() + (4*24*33*20*5020)} renderer={renderer} />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <div className="image" style={theme}>
                            <img src={offer} alt="offer" />
                            <div className="offer">35%<span>Off</span></div>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn btn-light btn-block mt-3" style={theme}>Get Offer</a>
            </div>
        </div>
    )
}
