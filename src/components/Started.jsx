import React from 'react'
import './Started.css'
import { Link } from 'react-router-dom'

const Started = () => {
    return (  
        <div className='my__container Started d-flex flex-column justify-content-center'>
            <h1 className="brown mx-auto">Get Started Now with Shade</h1>
            <p className='mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <form className='mx-auto'>
                <input type="email"/>
                <button>Sign Up</button>
            </form>

            <p className='mx-auto started__p'>By clicking Sign Up you're confirming that you agree with our<Link to='/terms-of-service'><span className='brown'>Terms and Conditions.</span></Link></p>
        </div>
    )
}

export default Started