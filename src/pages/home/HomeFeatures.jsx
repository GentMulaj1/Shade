import React from 'react'
import './HomeFeatures.css'
import { Link } from 'react-router-dom'


const HomeFeatures = () => {
    return (
        <div className='my__container'>
            <div className="HomeFeatures">
                <p className="brown">FEATURES</p>
                <h1>Work Smart and Create Website with Shade</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>

                <div className='cards'>
                    <div className="left__cards">
                        <div className="card">
                            <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d8aec34bb5ec911a33c68a_Icon_Design.png" alt="" />
                            <h3>Aesthetic Design</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                            </p>
                        </div>

                        <div className="card">
                            <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d8aec37da01f02f1a3f03b_Icon_Support.png" alt="" />
                            <h3>Efficient Support</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                            </p>
                        </div>

                    </div>

                    <div className="mid__cards">
                        <div className="card">
                            <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e72050b76f4e6a15a7f_Service_1-p-800.jpg" alt="" />
                        </div>
                    </div>

                    <div className="right__cards">
                        <div className="card">
                            <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d8aec3aa3cce539a04ffab_Icon_Responsive.png" alt="" />
                            <h3>Highly Responsive</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                            </p>
                        </div>

                        <div className="card">
                            <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d8aec3a59817885ae11ae0_Icon_Animation.png" alt="" />
                            <h3>Smooth Animation</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <a href="#" className='grey__btn' >Sign up</a>
                    <Link className='brown' to='/about'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeFeatures