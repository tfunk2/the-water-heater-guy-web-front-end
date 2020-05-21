import React from 'react'
import serviceMap from '../../images/service-map.png'
import '../../stylesheets/ServiceArea.css'

export default function ServiceArea (props) {
    return (
        <div className="service-area-div">
            <div className="map-div">
                <div className="map-inner-div">
                    <h1 className="service-area-title">Service Area</h1>
                    <hr/>
                    <p className="map-text">In order to control expenses, I limit my services to north of the river and south of Highway-36.</p>
                    <br/>
                    <p className="map-text">Sorry, I do not service any part of Kansas.</p>
                    <br/>
                    <hr/>
                </div>
                <div className="map-inner-div">
                    <img className="service-map" alt="service map" src={serviceMap}></img>
                    <p className="map-text" id="rough-outline-text">(This is a rough outline of the service area)</p>
                </div>
            </div>
            <hr/>
            <div>
                <h1 id="community-text" className="map-text">I am happy to provide service for the following <span className="bold-missouri">Missouri</span> communities, and their rural surroundings: </h1>
                <hr className="community-hr"/>
            </div>
            <div className="city-list">
                <p className="map-text">Arley</p>
                <p className="map-text">Camden Point</p>
                <p className="map-text">Cameron</p>
                <p className="map-text">Clinton County</p>
                <p className="map-text">Clay County</p>
                <p className="map-text">De Kalb</p>
                <p className="map-text">Dearborn</p>
                <p className="map-text">Ectonville</p>
                <p className="map-text">Edgerton</p>
                <p className="map-text">Elmira</p>
                <p className="map-text">Excelsior Springs</p>
                <p className="map-text">Farley</p>
                <p className="map-text">Faucett</p>
                <p className="map-text">Ferrelview</p>
                <p className="map-text">Gladstone</p>
                <p className="map-text">Gower</p>
                <p className="map-text">Holt</p>
                <p className="map-text">Homestead Village</p>
                <p className="map-text">Kansas City, MO</p>
                <p className="map-text">Kearney</p>
                <p className="map-text">Lake Waukomis</p>
                <p className="map-text">Lathrop</p>
                <p className="map-text">Lawson</p>
                <p className="map-text">Liberty</p>
                <p className="map-text">Mosby</p>
                <p className="map-text">North Kansas City</p>
                <p className="map-text">Orrick</p>
                <p className="map-text">Paradise</p>
                <p className="map-text">Parkville</p>
                <p className="map-text">Platte City</p>
                <p className="map-text">Platte County</p>
                <p className="map-text">Platte Woods</p>
                <p className="map-text">Plattsburg</p>
                <p className="map-text">Ray County</p>
                <p className="map-text">Rayville</p>
                <p className="map-text">Rushville</p>
                <p className="map-text">Smithville</p>
                <p className="map-text">Tracy</p>
                <p className="map-text">Trimble</p>
                <p className="map-text">Turney</p>
                <p className="map-text">Wallace</p>
                <p className="map-text">Weatherby Lake</p>
                <p className="map-text">Weston</p>
                <p className="map-text">Wood Heights</p>
            </div>
        </div>
    )
}