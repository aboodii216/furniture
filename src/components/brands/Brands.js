import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import b1 from '../../images/brands/01.png'
import b2 from '../../images/brands/02.png'
import b3 from '../../images/brands/03.png'
import b4 from '../../images/brands/04.png'
import b5 from '../../images/brands/05.png'
import b6 from '../../images/brands/06.png'

import './index.scss'

export default function Brands() {
    return (
        <div className="brands mt-5">
            <OwlCarousel className="owl-theme" autoWidth center loop items="6" dots={false} smartSpeed="450">
                <div class="item"><img src={b1} alt="1"/></div>
                <div class="item"><img src={b2} alt="2"/></div>
                <div class="item"><img src={b3} alt="3"/></div>
                <div class="item"><img src={b4} alt="3"/></div>
                <div class="item"><img src={b5} alt="3"/></div>
                <div class="item"><img src={b6} alt="3"/></div>
            </OwlCarousel>
        </div>
    )
}
