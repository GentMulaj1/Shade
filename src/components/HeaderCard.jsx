import React from 'react'
import './HeaderCard.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';



const HeaderCard = ({title, description}) => {
    return (
        <div className='HeaderCard d-flex justify-content-between align-items-center'>
            <div className="headerCard__left">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>


            <div className="headerCard__right">
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
        </div>
    )
}

export default HeaderCard