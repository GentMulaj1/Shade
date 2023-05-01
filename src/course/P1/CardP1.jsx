import React from 'react'
import './CardP1.css'

const CardP1 = ({ title, location, details, dateStart, dateEnd, image }) => {
    return (
        <div className='CardP1'>
            <img src={image} alt="" />
            <div>
                <h1>{title}</h1>
                <p>{location}</p>
                <p>{details}</p>
                <div>
                    <b>{dateStart}</b>
                    <b>{dateEnd}</b>
                </div>
            </div>
        </div>
    )
}

export default CardP1