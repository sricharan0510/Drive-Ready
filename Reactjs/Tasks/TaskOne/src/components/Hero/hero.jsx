import React from "react"
import "./hero.css"
import hero from "../../assets/Hero.gif"

export const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1 className="content-head">React JS</h1>
                    <p className="content-desc">React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies</p>
                    <button className="content-button">Learn More</button>
                </div>
                <div className="hero-image-div">
                    <img src={hero} className="hero-image"/>
                </div>
            </div>
        </>
    )
}