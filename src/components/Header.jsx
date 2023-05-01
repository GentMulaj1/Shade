import React from 'react'
import './Header.css'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
        console.log(open)
    }

    return (
        <>
        <div className="my__container">
            <div className='Header px-3 d-flex justify-content-between align-items-center '>
                <Link to='/'><h3 className='brown '>Shade</h3></Link>

                <div className="header__menu">
                    {open ? <CloseIcon onClick={handleOpen}/> : <MenuIcon onClick={handleOpen}/>}
                </div>

                <div className="big__screen" >
                    <ul className='d-flex justify-content-between align-items-center'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/blog'>Pages</Link></li>
                        <Link to='/contact' className='grey__btn contact__btn'>Contact</Link>
                    </ul>
                </div>

            </div>

            <div className={`mobile ${open ? '' : 'close'}`} >
                <ul className='px-0 px-3 p-3 header__ul justify-content-start '>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/blog'>Pages</Link></li>
                    <Link to='/contact' className='grey__btn contact__btn'>Contact</Link>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header