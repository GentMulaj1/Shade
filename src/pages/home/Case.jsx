import React from 'react'
import './Case.css'


const Case = () => {
    return (
        <div className='my__container'>
            <div className="Case">
                <p className="brown">FEATURES</p>
                <h1>Work Smart and Create Website with Shade</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>

                <div className="case__cards">
                    <div className="case__card d-flex justify-content-center align-items-center border p-5">
                        <div className="case__card__left w-50">
                            <img className='w-50' src="https://uploads-ssl.webflow.com/63d779cebae0fca41ff09f96/63d8e1d02d9d554def1294f0_Logo_dark_4.png" alt="" />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <a href="#" className='brown'>Read Full Story</a>
                        </div>

                        <div className="case__card__right w-50">
                            <img className='w-100 h-100 ' src="https://uploads-ssl.webflow.com/63d779cebae0fca41ff09f96/63d8e1cad2064c029104ece1_Project_5-p-1080.jpg" alt="" />    
                        </div>                        
                    </div>


                    <div className="case__card d-flex justify-content-center align-items-center border p-5">
                        <div className="case__card__left w-50">
                            <img className='w-50' src="https://uploads-ssl.webflow.com/63d779cebae0fca41ff09f96/63d8e160471b3dc88c34e381_Logo_dark_3.png" alt="" />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <a href="#" className='brown'>Read Full Story</a>
                        </div>

                        <div className="case__card__right w-50">
                            <img className='w-100 h-100' src="https://uploads-ssl.webflow.com/63d779cebae0fca41ff09f96/63d8e159ef9132b2e47dcff9_Project_4-p-1080.jpg" alt="" />    
                        </div>                        
                    </div>



                </div>



            </div>
        </div>
    )
}

export default Case