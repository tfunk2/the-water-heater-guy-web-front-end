import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard, faTruck, faTools, faComments, faSmile } from '@fortawesome/free-solid-svg-icons'


export default function NavBar(props) {

    const handleClick = (clickedTab) => {
        props.setActiveTab(clickedTab)
    }

    return(
        <div className="nav-bar-div">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div 
                            className="nav-link" 
                            id="home" 
                            onClick={() => handleClick("home")}
                        >
                            <FontAwesomeIcon icon={faHome} className="font-awesome-icon"/>
                            <span className="link-text">Home</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div 
                            className="nav-link" 
                            id="services-and-pricing" 
                            onClick={() => handleClick("services-and-pricing")}
                        >
                            <FontAwesomeIcon icon={faTools} className="font-awesome-icon"/>
                            <span id="services-and-pricing" className="link-text">Services & Pricing</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div 
                            className="nav-link" 
                            id="service-area" 
                            onClick={() => handleClick("service-area")}
                        >
                            <FontAwesomeIcon icon={faTruck} className="font-awesome-icon"/>
                            <span className="link-text">Service Area</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div 
                            className="nav-link" 
                            id="contact-me" 
                            onClick={() => handleClick("contact-me")}
                        >
                            <FontAwesomeIcon icon={faComments} className="font-awesome-icon"/>
                            <span className="link-text">Contact Me</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div 
                            className="nav-link" 
                            id="testimonials" 
                            onClick={() => handleClick("testimonials")}
                        >
                            <FontAwesomeIcon icon={faSmile} className="font-awesome-icon"/>
                            <span className="link-text">Testimonials</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div 
                            className="nav-link" 
                            id="about" 
                            onClick={() => handleClick("about")}
                        >
                            <FontAwesomeIcon icon={faAddressCard} className="font-awesome-icon"/>
                            <span className="link-text">About</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}