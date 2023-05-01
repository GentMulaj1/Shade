import React from 'react'
import Header from '../../components/Header'
import Started from '../../components/Started'
import AllPages from '../../components/AllPages'
import Footer from '../../components/Footer'
import HeaderCard from '../../components/HeaderCard'
import CaseCard from '../../components/CaseCard'
import project from './data'

const Projects = () => {
    return (
        <div className='my__container'>
            <Header/>
        
            <div className="Projects">
                <HeaderCard 
                    title={'Projects'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'}
                />
                
                <div className="case__cards">
                    {
                        project.map((item) => (
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

            </div>

            <Started/>
            <AllPages/>
            <Footer/>
        </div>
    )
}

export default Projects