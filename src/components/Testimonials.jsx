import React from 'react'
import './Testimonials.css'
import { Link } from 'react-router-dom'


const Testimonials = () => {
    return (
        <div className='my__container'>
            <div className="Testimonials">
                <h1>Customer testimonials</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className='testimonials__cards d-flex'>
                    <div className="testimonials__card">
                        <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e701c71e071feef5a78_Logo_dark_4.png" alt="" />
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                        </p>
                        <div className='testimonials__author'>
                            <div className="author__img">
                                <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d8f6ec9e8bf44b187642be_Testimonial_Avatar_4.jpg" alt="" />
                            </div>
                            <div className="author__name">
                                <h5>Andrew hale</h5>
                                <p>Position, Company name</p>
                            </div>
                        </div>
                        <Link className='brown' to='/projects'>Read Case Study</Link>

                    </div>


                    <div className="testimonials__card">
                        <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e70d03a898164a4dffe_Logo_dark_2.png" alt="" />
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                        </p>
                        <div className='testimonials__author'>
                            <div className="author__img">
                                <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d8f6ec154bae9d1bbaa9be_Testimonial_Avatar_5.jpg" alt="" />
                            </div>
                            <div className="author__name">
                                <h5>Jennifer Lawrence</h5>
                                <p>Head of Design</p>
                            </div>
                        </div>
                        <Link className='brown' to='/projects'>Read Case Study</Link>

                    </div>




                </div>
            
            </div>
        </div>
    )
}

export default Testimonials