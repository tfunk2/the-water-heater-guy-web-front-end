import React from 'react'
import '../../stylesheets/About.css'
import wrenches from '../../images/wrenches.jpg'

export default function About (props) {
    return (
        <div className="about-div">
            <div className="about-text-div">
                <h1 className="about-h1" id="main-title">Who is "The Water Heater Guy"?</h1>
                <p className="about-p-text"><span className="about-bold-text">Mike Strahl</span> took over the family business from his Dad, Arnold Saathoff who had been servicing and installing water heaters since 2000.  Mike renamed the business "The Water Heater Guy" and has personally serviced or installed approximately 10,000 water heaters and has increased his knowledge and expertise each time. He has expanded the business to meet the needs of his customers, and prides himself on quality work at a fair price. </p>
                <hr/>
                <h1 className="about-h1" id="sub-title">Personal Background</h1>
                <p className="about-p-text">Mike was born in Kansas City, MO, and graduated with honors from Kearney State College (Nebraska) in 1989 with a B.S. in Airway Computer Science, and a minor in Military Science. He then served as a transportation officer in the U.S. Army and is a Desert Storm veteran.</p>
                {/* <br/> */}
                <p className="about-p-text">Mike feels blessed to be married to a wonderful woman, Kate who accepts his long and unpredictable hours with a smile. They have four children and four grandchildren.  They attend Liberty Christian Fellowship in Liberty, MO, and reside at the northern edge of Kansas City, MO. </p>
            </div>
            <div className="wrench-image-div">
                <img className="wrench-image" alt="two wrenches on concrete" src={wrenches}></img>
            </div>
        </div>
    )
}