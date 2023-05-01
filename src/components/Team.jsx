import React from 'react'
import './Team.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Team = ({teamImage, teamName, teamWork, teamDescription}) => {
    return (
        <div className='Team'>
            <img src={teamImage} alt="" />
            <div>
                <p className="team__name">{teamName}</p>
                <p className="team__work">
                {teamWork}
                </p>
            </div>
            <p className="team__description">
            {teamDescription}
            </p>

            <div className="allpages__left">
                    <div className='allpages__social__footer team__icons'>
                        <a href={`https://www.facebook.com/${teamName}`} target='_blank'>
                            <FacebookIcon/>
                        </a>
                        <a href={`https://twitter.com/${teamName}`} target='_blank'>
                            <TwitterIcon/>
                        </a>
                        <a href={`https://www.linkedin.com/${teamName}`}>
                            <LinkedInIcon/>
                        </a>
                        <a href={`https://www.instagram.com/${teamName}`}>
                            <InstagramIcon/>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default Team