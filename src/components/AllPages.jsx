import React from 'react'
import './AllPages.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';


const AllPages = () => {
    return (
        <div className='my__container'>
            <div className="AllPages d-flex justify-content-between p-3">
                <div className="allpages__left">
                    <h1 className="brown">Shade</h1>
                    <p>Connect with us on Social media</p>
                    <div className='allpages__social__footer'>
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


                <div className="allpages__right d-flex justify-contnet-between">
                    <div>
                        <h5>Pages</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Pages</h5>
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Log in</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Pages</h5>
                        <ul>
                            <li><a href="#">License</a></li>
                            <li><a href="#">Style Guide</a></li>
                            <li><a href="#">Changelog</a></li>
                            <li><a href="#">Password</a></li>
                            <li><a href="#">404</a></li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default AllPages