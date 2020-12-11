import React, { useState, useContext} from 'react'
import Capital from '../capitalLetter/Capital'
import CountUp from 'react-countup';

import './index.scss'
import { ThemeStyle } from '../../Context/darkMode';

export default function About() {
    const [items] = useState([560,380,250,500])
    const [names] = useState(['PROJECTS','EMPLOYEES','CONTRACTORS','CLIENTS'])
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
        <div className="about pt-5" style={theme}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xs-12">
                        <Capital letter="a" titleLight="about" titleBold=" studio" />
                        <div className="desc">
                            <p>
                            Founded in 1999, ID works to deliver full interior design packages from concept schemes to full scale of interior & architectural refurbishments with the needed technical drawings & 3D visualizations , with close attention to details, managed and implemented with great care; for interior construction, space planning, materials, finishes, furnishings, fixtures and equipment.                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                        <div className="countUp p-3 text-center">
                            <div className="row">
                                {(items).map((item) => 
                                    <div className="col-6" key={Math.random()}>
                                        <div className="box pt-5 pb-3">
                                            <span className="num font-weight-bold">
                                                
                                            <CountUp start={0} end={item} duration={item/120}/>
                                            </span>
                                            <div className="name font-weight-bold">
                                                {names[items.indexOf(item)]}
                                            </div>
                                        </div>
                                    </div>    
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
