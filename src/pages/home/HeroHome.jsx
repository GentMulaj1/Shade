import React from 'react'
import './HeroHome.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';



const HeroHome = () => {
    return (
        <div className='HeroHome'>
            <div className='HeroHome__left'>
                <h1 className='mx-auto'>Everything Begins with an <span className='brown'>Idea</span></h1>
                
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>

                <form>
                    <input type="email" placeholder='Enter email' />
                    <button>Sign Up</button>
                </form>

                <span className='small__span'>By clicking Sign Up you're confirming that you agree with our <Link to='/terms-of-service'><span className='brown'>Terms and Conditions.</span></Link></span>

            </div>

            <div className='hide__mobile allpages__social'>
                <Link to='https://facebook.com' target='_blank'>
                    <FacebookIcon/>
                </Link>
                <Link to='https://twitter.com' target='_blank' >
                    <TwitterIcon/>
                </Link>
                <Link to='https://linkedin.com' target='_blank' >
                    <LinkedInIcon/>
                </Link>
                <Link to='https://instagram.com' target='_blank' >
                    <InstagramIcon/>
                </Link>
            </div>

        </div>
    )
}

export default HeroHome