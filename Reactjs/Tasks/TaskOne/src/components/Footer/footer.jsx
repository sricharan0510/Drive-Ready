import React from 'react'
import './footer.css'
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub  } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <div className='footer-div'>
                <div className='icons'>
                    <div className="icon"><FaLinkedin/></div>
                    <div className="icon"><FaInstagram/></div>
                    <div className="icon"><FaTwitter/></div>
                    <div className="icon"><FaGithub/></div>
                </div>
            </div>
        </>
    )
}