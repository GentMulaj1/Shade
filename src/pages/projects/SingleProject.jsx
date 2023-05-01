import React from 'react'
import { Link, useParams } from 'react-router-dom'
import project from './data'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AllPages from '../../components/AllPages';
import Started from '../../components/Started';
import HeaderCard from '../../components/HeaderCard';
import './SingleProject.css'
import DescriptionsProject from '../../components/DescriptionsProject';

const SingleProject = () => {


    const { id } = useParams(); 
    const item = project.find(
        item => item.id === parseInt(id)
    ); 



    return (
        <div className='my__container'>
            
            <Header/>

            <div className="SingleProject">
                <HeaderCard 
                    title={item.title}
                    description={item.caseDescription}
                />

                <div className="singleProject__image">
                    <img src={item.caseBigImage} alt="" />
                </div>

                <DescriptionsProject/>

                <h1>
                    <Link to='/projects'>Back to page</Link>
                </h1>
            </div>

            <Started/>
            <AllPages/>
            <Footer/>

        
        </div>
    )
}

export default SingleProject