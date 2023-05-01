import React from 'react'
import './PricePlan.css'

const PricePlan = () => {
    return (
        <div className='my__container'>
            <div className="PricePlan">
                <p className="brown">PRICING</p>
                <h1>Pricing plan</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="prices">
                    <div className="price__card">
                        <h3>Basic plan</h3>
                        <h1>$19/mo</h1>
                        <span>or $199 yarly</span>
                        
                        <ul>
                            <li><img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e74be988904e0c379f3_Tick.png" alt="" className='img__margin'/> Lorem, ipsum dolor.</li>
                            <li><img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e74be988904e0c379f3_Tick.png" alt="" className='img__margin'/> Lorem, ipsum dolor.</li>
                            <li><img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e74be988904e0c379f3_Tick.png" alt="" className='img__margin'/> Lorem, ipsum dolor.</li>
                        </ul>

                        <a href="#" className="grey__btn">Get started</a>

                    </div>

                    <div className="price__card bg__grey">
                        <h3>Basic plan</h3>
                        <h1>$29/mo</h1>
                        <span>or $299 yarly</span>
                        
                        <ul>
                            <li><img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e74be988904e0c379f3_Tick.png" alt="" className='img__margin'/> Lorem, ipsum dolor.</li>
                            <li><img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e74be988904e0c379f3_Tick.png" alt="" className='img__margin'/> Lorem, ipsum dolor.</li>
                            <li><img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e74be988904e0c379f3_Tick.png" alt="" className='img__margin'/> Lorem, ipsum dolor.</li>
                        </ul>

                        <a href="#" className="black__btn another__btn">Get started</a>

                    </div>

                    <div className="price__card">
                        <h3>Basic plan</h3>
                        <h1>$49/mo</h1>
                        <span>or $499 yarly</span>
                        
                        <ul>
                            <li><img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e74be988904e0c379f3_Tick.png" alt="" className='img__margin'/>Lorem, ipsum dolor.</li>
                            <li><img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e74be988904e0c379f3_Tick.png" alt="" className='img__margin'/>Lorem, ipsum dolor.</li>
                            <li><img src="https://uploads-ssl.webflow.com/63b55c8e909300be9ab8447d/63d54e74be988904e0c379f3_Tick.png" alt="" className='img__margin'/>Lorem, ipsum dolor.</li>
                        </ul>

                        <a href="#" className="grey__btn">Get started</a>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default PricePlan