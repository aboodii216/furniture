import React from 'react'
import './index.scss'

export default function Capital(props) {
    return (
        <div>
            <div className="heading text-uppercase">
                <span className="big-letter">
                    {props.letter}
                </span>
                <h2 className="title"><span className="font-weight-light">{props.titleLight} </span><span className="font-weight-bold"> {props.titleBold}</span> </h2>
            </div>
        </div>
    )
}
