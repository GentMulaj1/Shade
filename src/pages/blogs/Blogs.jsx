import React from 'react'
import './Blogs.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AllPages from '../../components/AllPages'
import Started from '../../components/Started'
import HeaderCard from '../../components/HeaderCard'

import Blog from '../../components/Blog'
import blogs from './data'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <div className='my__container'>
            <Header/>
            <div className="Blog__firstClass">
                <HeaderCard 
                    title={'Get the latest News and Updates'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'}
                />

                <div className="Blogs">
                    <p className='brown'>BLOG</p>
                    <h1>Check out Latest Updates</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    <div className="blog__news">
                        {
                            blogs.map(item => (
                                <Link to={`/blog/${item.id}`}
                                    key={item.id}
                                >
                                <Blog 
                                    bigImg={item.bigImg}
                                    whatIs={item.whatIs}
                                    time={item.time}
                                    title={item.title}
                                    description={item.description}
                                    id={item.id}
                                />
                                </Link>
                            ))
                        }

                        
                    </div>

                </div>

            </div>

            <Started/>
            <AllPages/>
            <Footer/>
        </div>
    )
}

export default Blogs