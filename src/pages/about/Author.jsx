import React from 'react'
import './Author.css'

const Author = () => {
    return (
        <div className='Author'>
            <div className="author__left">
                <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e6ed8cef9527acaf4b8_Founder-p-800.jpg" alt="" />
            </div>

            <div className="author__right">
                <p id="author__description">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                </p>
                <div className='name__and__img'>
                    <div className="author__name">
                        <p>Jacob</p>
                        <span>Founder, Shade</span>
                    </div>

                    <div className="author__img">
                        <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e705236772e131b3835_Logo_dark_1.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Author