import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { IoMenu } from "react-icons/io5";

function Header() {
    return (
        <div>
            <div className='header'>
                <div className='title'>
                    <img src={logo} className='logoImage' />
                </div>
                <div className='nav'>
                    <div className='nav-item'>Home<div className='strip'></div></div>
                    <div className='nav-item'>About<div className='strip'></div></div>
                    <div className='nav-item'>Products<div className='strip'></div></div>
                    <div className='nav-item'>Contact<div className='strip'></div></div>
                </div>
                <div className='btn-div'>
                    <button className='btn'>Book Now</button>
                </div>
                <div className='menu'>
                    <IoMenu size={35} />
                </div>
            </div>
        </div>
    )
}

export default Header
