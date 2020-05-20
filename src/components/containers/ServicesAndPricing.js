import React from 'react'
import copperPipes from '../../images/copper-pipes-1.png'
import '../../stylesheets/ServicesAndPricing.css'
import solderCopperPipe from '../../images/solder-copper-pipe.png'
import hotShower from '../../images/hot-shower.jpg'

export default function ServiceAndPricing (props) {
    return (
        <div className="services-and-pricing-div">

            <section className="services-pricing-row-1">
                <div className="pricing-text-div">
                    <p className="company-goal">My goal is to provide quality service at a fair price.</p>
                    <hr/>
                    <p className="pricing-text-p">Be careful of competitors who offer low price 'basic installation' and then upcharge for things that are typically needed.</p>
                    <br/>
                    <p className="pricing-text-p"><span className="bold-text">My prices</span> include everything needed for most installations: </p>
                    <ul className="pricing-ul">
                        <li className="pricing-li">A quality appliance</li>
                        <li className="pricing-li">Installation materials including a new shut off valve (when appropriate)</li>
                        <li className="pricing-li">Salt for water softeners</li>
                        <li className="pricing-li">Labor</li>
                        <li className="pricing-li">Haul-off of the old appliance</li>
                        <li className="pricing-li">Even taxes are covered</li>
                    </ul>
                    <p id="pricing-text-p" className="pricing-text-p">I also test for pressure and expansion problems to identify potential hazards at <span className="bold-text">no charge.</span></p>
                </div>
                <div className="image-div">
                    <img className="copper-pipes-image" alt="copper pipes" src={copperPipes}></img>
                </div>
            </section>
            <hr className="between-sections" />
            <section className="services-pricing-row-2">
                <div className="image-div">
                    <img 
                        className="solder-copper-pipe-image" 
                        alt="solder-copper-pipe" 
                        src={solderCopperPipe}
                    >
                    </img>
                </div>
                <div className="water-heater-div">
                    <h1 className="water-heater-table-title">Water Heaters</h1>
                    <hr/>
                    <div>
                        <div className="table-row">
                            <p className="table-cell">Service Call</p>
                            <p className="table-cell">$105</p>
                        </div>
                        <div className="table-row">
                            <p className="table-cell">50 gal. Electric</p>
                            <p className="table-cell">$950</p>
                        </div>
                        <hr/>
                        <div className="table-row">
                            <p className="table-cell">75 / 80 / 85 / 105 gal. Electric</p>
                            <p className="table-cell">Call</p>
                        </div>
                        <hr/>
                        <div className="table-row">
                            <p className="table-cell">40 gal. Gas</p>
                            <p className="table-cell">$950</p>
                        </div>
                        <hr/>
                        <div className="table-row">
                            <p className="table-cell">50 gal. Gas</p>
                            <p className="table-cell">$1,050</p>
                        </div>
                        <hr/>
                        <div className="table-row">
                            <p className="table-cell">Pressure Reducing Valve</p>
                            <p className="table-cell">$200</p>
                        </div>
                        <hr/>
                        <div className="table-row">
                            <p className="table-cell">Expansion Tank</p>
                            <p className="table-cell">$200</p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </section>
            <hr className="between-sections" />
            <section className="services-pricing-row-3">
                <div className="water-heater-div">
                    <h1 className="water-softener-table-title">Water Softeners and Filters</h1>
                    <hr/>
                    <div>
                        <div className="table-row">
                            <p className="table-cell">Service Call</p>
                            <p className="table-cell">$105</p>
                        </div>
                        <div className="table-row">
                            <p className="table-cell">40,200 Grain</p>
                            <p className="table-cell">$1,050</p>
                        </div>
                        <p className="table-cell-descriptor">(size for most households)</p>
                        <hr/>
                        <div className="table-row">
                            <p className="table-cell">45,100 Grain</p>
                            <p className="table-cell">$1,150</p>
                        </div>
                        <p className="table-cell-descriptor">(size for larger households)</p>
                        <hr/>
                        <div className="table-row">
                            <p className="table-cell">Large Capacity Whole House Filter</p>
                            <p className="table-cell">$350</p>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="image-div">
                    <img 
                        className="hot-shower-image" 
                        alt="hot shower" 
                        src={hotShower}
                    >
                    </img>
                </div>
            </section> 
            <hr className="between-sections" />
            <section className="services-pricing-row-4">
                <div className="video-container">
                    <iframe
                        className="video"
                        title="Expansion Tanks (How It Works)"
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/Ye0I3V6KCw4" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    >
                    </iframe>
                </div>
                <div>
                    <h1 className="video-h1">What does a pressure regulator do?</h1>
                    <p className="video-p">Watch this video to learn more and find out if you need one</p>
                </div>
            </section>
            <hr className="between-sections" />
            <section className="services-pricing-row-5">
                <div>
                    <h1 className="video-h1">Thermal expansion tank? What's that?</h1>
                    <p className="video-p">Watch this video to learn more and find out if you need one</p>
                </div>
                <div className="video-container">
                    <iframe 
                        className="video"
                        title="What is a Water Pressure Regulator?"
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/m690Jfwbcb8" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </section>
        </div>
    )
}