import React from 'react'
import './Contact.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AllPages from '../../components/AllPages'
import Started from '../../components/Started'

const Contact = () => {
    return (
        <div className='my__container'>

            <div className="Contact">
            <Header/>
                <div className="contact__center">
                    <p className='brown'>CONTACT</p>
                    <h1>Contact us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <form className="contact__form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' />
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" spellCheck='true' placeholder='Type your message...'></textarea>
                    <button className='grey__btn'>Submit</button>
                </form>

            <Started/>
            <AllPages/>
            <Footer/>
            </div>
        </div>
    )
}

export default Contact