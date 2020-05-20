import React from 'react'
import Logo from '../../images/Water-Heater-Guy-Logo.png'
import numberImage from '../../images/Water-Heater-Guy-Phone-Number.png'


export default function Header(props) {
    return(
        <div className="header-div">
            <img 
            alt="Water Heater Guy Logo" 
            src={Logo}
            className="main-logo"
            >
            </img>
            <div className="image-div">
                <img 
                    className="number-image"
                    alt="816-903-HOTT" 
                    src={numberImage}
                >
                </img>
            </div>
        </div>
    )
}