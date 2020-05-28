import React, { useState, useEffect } from 'react'
import '../../stylesheets/Home.css'
import mike from '../../images/Mike-Pic-1.png'
import mike2 from '../../images/IMG_4426.jpg'
import mike3 from '../../images/IMG_4404.jpg'
import platteClayLogo from '../../images/platte-clay-logo.png'
import { sample } from 'lodash'

export default function Home (props) {

    const [timerActive, setTimerActive] = useState(false)
    const [displayedTestimonial, setDisplayedTestimonial] = useState({name: "Tyler F.", message: "Mike is a guy you can count on and trust to do excellent work!"})

    const toggle = () => {
        setTimerActive(!timerActive)
    }

    useEffect(() => {
        let interval = null
        if (!timerActive && props.testimonials.length > 0) {
            toggle()
            interval = setInterval(() => {
                setDisplayedTestimonial(sample(props.testimonials))
            }, 3000)
        }
    })

    const returnTestimonial = () => {
        return <div className="testimonial-div-2">
            <div className="testimonial-card">
                <p id="testimonial-name" className="opening-p">{displayedTestimonial.name}</p>
                <p id="testimonial-message" className="opening-p">{displayedTestimonial.message}</p>
            </div>
        </div>
    }

    return (
        <div className="home-div">
            <div className="title-section">
                <h2 id="main-title" className="title">A Water Heater Expert</h2>
                <h3 id="sub-title" className="title">at your service since 2009</h3>
            </div>
            <div className="text-div">
                <img className="mike-pic-2" alt="Mike in back of truck" src={mike2}></img>
                <div className="opening-div">
                    <p className="opening-p">I have specialized in water heaters for over a decade, and have personally repaired or replaced approximately <span className="bold-text-number">10,000</span>  water heaters.</p>
                    <br/>
                    <p className="opening-p"> Let me put my experience to work for you. I offer same/next day service in most cases, and competitive pricing. </p>
                    <br/>
                    <hr/>
                    <div className="testimonial-p">
                        <p id="recent-testimonial-title">Recent testimonials</p>
                    </div>
                    {returnTestimonial()}
                </div>
                <img className="mike-pic-2" alt="Side of truck" src={mike3}></img>
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