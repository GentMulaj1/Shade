import React from 'react'
import './Begins.css'


const Begins = () => {
    return (
        <div className='Begins d-flex'>

            <div className="begins__left border ">
                <img className='w-100 h-100 object-fit-contain p-5 ' src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e6fb0a17e1140e1d335_Header_3-p-800.jpg" alt="" />
            </div>

            <div className="begins__right d-flex flex-column justify-content-center">
                <span className='brown '>ABOUT</span>
                <h1>Everything Begins with an Idea.</h1>
                <p>
                    See how Shades help customers around the globe are building and scaling their applications and businesses. The more an idea is developed, the more concise becomes its expression; the more a tree is pruned, the better is the fruit
                </p>

                <span className="begins__btn">
                    <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d8aec34bb5ec911a33c68a_Icon_Design.png" alt="" />
                    Resposive Design
                </span>

                <span className="begins__btn">
                    <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d8aec3aa3cce539a04ffab_Icon_Responsive.png" alt="" />
                    High on Aesthetic
                </span>

                <span className="begins__btn">
                    <img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d8aec37da01f02f1a3f03b_Icon_Support.png" alt="" />
                    Dedicated Support
                </span>

            </div>
        </div>
    )
}

export default Begins