import React from 'react'
import Header from '../../components/Header'
import Testimonials from '../../components/Testimonials'
import Started from '../../components/Started'
import AllPages from '../../components/AllPages'
import Footer from '../../components/Footer'
import HeaderCard from '../../components/HeaderCard'
import Begins from './Begins'
import Buttons from '../../components/Buttons'
import Author from './Author'
import OurTeam from './OurTeam'

const About = () => {
    return (
        <div className='my__container'>
            <Header/>
            
            <div className="About">
                <HeaderCard 
                    title="What is Shade all About" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                />
                <Begins/>
                <Buttons/>
                <Author/>
                <OurTeam />

            </div>

            <Testimonials/> 
            <Started/>
            <AllPages/>
            <Footer/>
        </div>
    )
}

export default About