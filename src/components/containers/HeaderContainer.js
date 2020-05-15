import React from 'react'
import Logo from '../../images/Water-Heater-Guy-Logo.png'

export default function Header(props) {
    return(
        <div className="header-div">
            <img 
            alt="Water Heater Guy Logo" 
            src={Logo}
            className="main-logo"
            >
            </img>
            <section className="title-section">
                <h2 id="main-title" className="title">The Electric Water Heater Expert</h2>
                <h3 id="sub-title" className="title">At your service since 2009</h3>
            </section>
        </div>
    )
}