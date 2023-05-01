import React from 'react'
import './OurTeam.css'
import Team from '../../components/Team'
import data from './data'


const OurTeam = () => {
    return (
        <div className="my__container">
            <div className='OurTeam'>
                <p className="brown">MEET THE TEAM</p>
                <h1>OurTeam</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="outTeam__cards">
                    {
                        // Slice nga data.js mer index-0 deri index-6
                        data.slice(0, 6).map((item) => (
                            <Team 
                            key={item.id}
                            teamImage={item.image} 
                            teamName={item.name} 
                            teamWork={item.work}
                            teamDescription={item.description}    
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurTeam