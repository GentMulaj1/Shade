import React from 'react'
import './CaseCard.css'
import { Link } from 'react-router-dom'

const CaseCard = ({ smImage, caseDescription, caseBigImage, id }) => {
    return (
        <div>
            <div className="case__cards">
                <div className="case__card d-flex justify-content-center align-items-center p-5">
                    <div className="case__card__left w-50">
                        <img className='w-50' src={smImage} alt="" />
                        <p>
                            {caseDescription}
                        </p>
                        <Link to={`/projects/${id}`} className='brown'>Read Full Story</Link>
                    </div>

                    <div className="case__card__right w-50">
                        <img className='w-100 h-100 ' src={caseBigImage} alt="" />    
                    </div>                        
                </div>


            </div>
        </div>
    )
}

export default CaseCard