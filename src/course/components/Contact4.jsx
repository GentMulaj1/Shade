import React from 'react'

const Contact4 = ({ image, name, phone, email}) => {
    return (
        <div>
            <div className='card' style={{ margin: '50px',width: '300px', border: '1px solid black', borderRadius: '10px', padding: '20px'}}> 
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact4