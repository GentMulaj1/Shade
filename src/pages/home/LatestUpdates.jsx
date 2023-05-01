import React from 'react'
import './LatestUpdates.css'
import Blog from '../../components/Blog'
import blog from '../blogs/data'
import { Link } from 'react-router-dom'

const LatestUpdates = () => {
    return (      
        <div className='my__container'>
            <div className="LatestUpdates">
                <p className="brown">BLOG</p>
                <h1>Check out Latest Updates</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>

                <div className="latestupdates__cards">
                    {
                        blog.slice(0, 2).map(item => (
                            <Blog 
                                key={item.id}
                                bigImg={item.bigImg}
                                whatIs={item.whatIs}
                                time={item.time}
                                title={item.title}
                                description={item.description}
                                id={item.id}
                            />
                        ))
                    }
                </div>

                <Link to='/blog' className="grey__btn latest__btn">View all</Link>

            </div>
        </div>
    )     
}

export default LatestUpdates        