import React from 'react'
import '../../stylesheets/Home.css'
import mike from '../../images/Mike-Pic-1.png'
import platteClayLogo from '../../images/platte-clay-logo.png'

export default function Home (props) {
    return (
        <div className="home-div">
            <div className="title-section">
                <h2 id="main-title" className="title">A Water Heater Expert</h2>
                <h3 id="sub-title" className="title">at your service since 2009</h3>
            </div>
            <div className="text-div">
                <p className="opening-p">I have specialized in water heaters for over a decade, and have personally repaired or replaced approximately <span className="bold-text-number">10,000</span>  water heaters.</p>
                <img className="mike-pic-1" alt="Mike fixing water heater" src={mike}></img>
                <p className="opening-p"> Let me put my experience to work for you. I offer same/next day service in most cases, and competitive pricing. </p>
            </div>
            <hr/>
            <div className="platte-clay-div">
                <img className="platte-clay-logo" alt="Platte Clay Logo" src={platteClayLogo}></img>
                <p className="opening-p">Members are eligible for discounts on water heaters through the co-op. Simply inform me that you are a member.</p>
            </div>
            <hr/>
            <div className="home-video-div">
                <p className="opening-p">Learn why you should never alter or disable a 'T & P' valve!</p>

                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/jbreKn4PoAc" 
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                >
                </iframe>
            </div>
            <hr/>
        </div>
    )
}