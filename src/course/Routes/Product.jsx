import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import products from './data'


const Product = () => {

    return (
        <div>
            {
                products.map((item) => (
                    <Link to={`/products/${item.id}`}>
                        <div className='card'>
                            <p>{item.name}</p>
                            <img src={item.image} alt="" />
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Product