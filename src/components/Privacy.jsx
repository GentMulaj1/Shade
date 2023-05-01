import React from 'react'
import HeaderCard from './HeaderCard'
import './Terms.css'

import Header from './Header'
import Footer from './Footer'
import AllPages from './AllPages'
import Started from './Started'


const Privacy = () => {
    return (
        <>
        <Header/>


        <div className='my__container'>
        <HeaderCard 
            title={'Privacy policy'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'}        
        />
        <div className="Terms">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ol>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor incididunt</li>
                <li>Labore et dolore magna aliqua</li>
            </ol>
            
            <h2>Refunds</h2>
            <p>
            Et qui et quae et maxime assumenda. Suscipit voluptatum in fugiat. A sapiente eveniet doloremque asperiores numquam voluptatem. Beatae illo commodi. Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
            </p>

            <span>
            Maxime aut rerum corporis est iusto quod molestiae ut quisquam.
            </span>

            <h3>Privacy and Policy</h3>
            <p>
            Quisquam ea quos quisquam velit debitis. Ut cumque eius. Dolor molestias voluptatem in. Et blanditiis perferendis aperiam illum molestiae molestiae corporis. Consequatur quae accusamus provident qui. Est dolorem ut sint aliquid et et placeat eum minima. Osmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor incididunt</li>
                <li>Labore et dolore magna aliqua</li>
            </ul>

            <h4>Terms and Conditions</h4>
            <p>
            Voluptates autem placeat in amet blanditiis. Enim aut sed qui. Dicta corporis occaecati aut. Ea architecto dolores est culpa repellat delectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

        </div>
    </div>

        <Started/>
        <AllPages/>
        <Footer/>
    </>
    )
}

export default Privacy