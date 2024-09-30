import React from 'react';
import './header.css';
import Logo from '../../assets/react.svg';

export const Header = () => {
    return (
        <>
            <div className="my-header">
                <div className='header-logo'>
                    <img src={Logo} alt='React Logo' className='my-img'/>
                    <div className="logo-name">React</div>
                </div>
                <ul className='nav-items'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Support</li>
                    <li>Contact</li>
                </ul>
                <div className="buttons">
                    <button className='b'>Login</button>
                    <button className='b'>Sign Up</button>
                </div>
            </div>
        </>
    );
}