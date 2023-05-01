import React from 'react'
import './SingleBlog.css'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AllPages from '../../components/AllPages';
import Started from '../../components/Started';
import HeaderCard from '../../components/HeaderCard';
import DescriptionsBlog from '../../components/DescriptionsBlog';

import blogs from './data'
import Blog from '../../components/Blog';

const SingleBlog = () => {

    const { id } = useParams(); 
    const item = blogs.find(
        item => item.id === parseInt(id)
    ); 

    console.log(item.id)


    

    return (
        <div className='my__container'>
            
            <Header/>

            <div className="SingleProject">
                <HeaderCard 
                    title={item.title}
                    description={item.description}
                />

                <div className="singleProject__image">
                    <img src={item.bigImg} alt="" />
                </div>

                <DescriptionsBlog/>

                <div className="blog__footer">
                    {
                        blogs.map((item, index) => (
                            index < 2 
                            ? 
                                <Blog 
                                    key={item.id}
                                    bigImg={item.bigImg}
                                    whatIs={item.whatIs}
                                    time={item.time}
                                    title={item.title}
                                    description={item.description}
                                    id={item.id}
                                />
                            : 
                            null
                        ))
                    }
                </div>

                <h1>
                    <Link to='/blog'>Back to page</Link>
                </h1>
            </div>

            <Started/>
            <AllPages/>
            <Footer/>

        
        </div>
    )
}

export default SingleBlog