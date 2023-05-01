import React from 'react'
import './Home.css'
import Header from '../../components/Header'
import AllPages from '../../components/AllPages'
import Footer from '../../components/Footer'
import Started from '../../components/Started'
import HeroHome from './HeroHome'
import Buttons from '../../components/Buttons'
import HomeFeatures from './HomeFeatures'
import Testimonials from '../../components/Testimonials'
import PricePlan from '../../components/PricePlan'
import LatestUpdates from './LatestUpdates'
import CaseCard from '../../components/CaseCard'

import projects from '../projects/data'

const Home = () => {
    return (
        <div className='my__container'>
            <Header/>
            <div className="Home">
                <HeroHome/>
                <Buttons/>
                <HomeFeatures/>
                
                <div className="case__news">
                    {
                        projects.slice(0, 2).map(item => (
                            <CaseCard 
                                key={item.id}
                                smImage={item.smImage}
                                caseDescription={item.caseDescription}
                                caseBigImage={item.caseBigImage}
                                id={item.id}
                            />
                        ))
                    }
                </div>

                <Testimonials/> 
                <PricePlan/>
                
                <LatestUpdates/>


            </div>

            <Started/>
            <AllPages/>
            <Footer/>
        </div>
    )
}

export default Home