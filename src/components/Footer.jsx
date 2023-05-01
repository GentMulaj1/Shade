import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='my__container'>
            <div className="Footer d-flex justify-content-between align-items-center">
                <p>&copy; 2023 <span className='brown'>Gent Mulaj</span></p>


                <div className='for__gap d-flex justify-content-between'>
                    <p><Link to='/privacy-policy'>Privacy Policy</Link></p>
                    <p><Link to='/terms-of-service'>Terms of Service</Link></p>
                </div>

            </div>
        </div>
    )
}

export default Footer