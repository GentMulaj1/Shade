import React from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'


const Blog = ({ bigImg, whatIs, time, title, description, id }) => {
    return (
        <div className='Blog'>
            <img src={bigImg} alt="" />
            <div className='blog__buttons'>
                <a href="#">{whatIs}</a>
                <span>{time}</span>
            </div>

            <h2>{title}</h2>
            <p>
                {description}
            </p>
            
            <Link to={`/blog/${id}`}>Read more</Link>

        </div>
    )
}

export default Blog

