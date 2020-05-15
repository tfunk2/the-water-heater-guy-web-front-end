import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard, faTruck, faTools, faComments, faSmile } from '@fortawesome/free-solid-svg-icons'


export default function NavBar(props) {
    return(
        <div className="nav-bar-div">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faHome} className="font-awesome-icon"/>
                            <span className="link-text">Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faTools} className="font-awesome-icon"/>
                            <span className="link-text">Services & Pricing</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faTruck} className="font-awesome-icon"/>
                            <span className="link-text">Service Area</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faComments} className="font-awesome-icon"/>
                            <span className="link-text">Contact Me</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faSmile} className="font-awesome-icon"/>
                            <span className="link-text">Testimonials</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faAddressCard} className="font-awesome-icon"/>
                            <span className="link-text">About</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}