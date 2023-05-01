import React from 'react'

import Header from '../../components/Header'
import AllPages from '../../components/AllPages'
import Started from '../../components/Started'
import Footer from '../../components/Footer'
import HeaderCard from '../../components/HeaderCard'
import PricePlan from '../../components/PricePlan'

const Pricing = () => {
    return (
        <div className='my__container'>
            <Header/>

            <div className="Pricing">
                <HeaderCard 
                    title={'Pricing'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'}
                />
                <PricePlan/>
            </div>

            <Started/>
            <AllPages/>
            <Footer/>


        </div>
    )
}

export default Pricing