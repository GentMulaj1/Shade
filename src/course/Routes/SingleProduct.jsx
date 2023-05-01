import React from 'react'
import './SingleProduct.css'
import { Link, useParams } from 'react-router-dom'
import products from './data'

const SingleProduct = (props) => {
    const {productId} = useParams()
    const product = products.find(
        (product) => product.id === productId
    )

    return (
        <>
        <div className='card'>
            <h1>{product.id}</h1>
            <h1>{product.name}</h1>
            <img src={product.image} alt="" />

        </div>
        
        <Link to="/products">Back to products</Link>

        </>
    )
}

export default SingleProduct