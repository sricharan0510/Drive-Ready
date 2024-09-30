import React from 'react'
import './Company.css'
import { useState } from 'react'

function Company() {
    const FullCompanyArray = [
        {
            name: "Honda",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/honda20200511152343.jpg?q=80"
        },
        {
            name: "Enfield",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/royal-enfield20200508193112.jpg?q=80"
        },
        {
            name: "Yamaha",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/yamaha20200508193220.jpg?q=80"
        },
        {
            name: "Suziki",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/suzuki20200508193118.jpg?q=80"
        },
        {
            name: "Hero",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/hero20200508192826.jpg?q=80"
        },
        {
            name: "Bajaj",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/bajaj20200508192534.jpg?q=80"
        },
        {
            name: "TVS",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/tvs20200508193203.jpg?q=80"
        },
        {
            name: "KTM",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/ktm20200518163508.jpg?q=80"
        },
        {
            name: "Triumph",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/triumph20200508193154.jpg?q=80"
        },
        {
            name: "Kawasaki",
            logo: "https://logos-world.net/wp-content/uploads/2020/11/Kawasaki-Logo.jpg"
        },
        {
            name: "BMW",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/bmw20200508192553.jpg?q=80"
        },
        {
            name: "Jawa",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/jawa20200508192940.jpg?q=80"
        },
        {
            name: "Harley-Davidson",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/harleydavidson20200508192816.jpg?q=80"
        },
        {
            name: "OLA",
            logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/101/brands/logos/ola.jpg?v=1626954594142&q=80"
        },
        {
            name: "Ather",
            logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/79/brands/logos/ather1704450986845.jpg?v=1704450986888&q=80"
        }
    ]
    const HalfCompanyArray = [
        {
            name: "Honda",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/honda20200511152343.jpg?q=80"
        },
        {
            name: "Enfield",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/royal-enfield20200508193112.jpg?q=80"
        },
        {
            name: "Yamaha",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/yamaha20200508193220.jpg?q=80"
        },
        {
            name: "Suzuki",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/suzuki20200508193118.jpg?q=80"
        },
        {
            name: "Hero",
            logo: "https://imgd.aeplcdn.com/0X0/bw/makes/hero20200508192826.jpg?q=80"
        }

    ]
    const [flag, setFlag] = useState(true);
    return (
        <div>
            <div className='Companies-Page'>
                <div className='Heading'>Companies</div>
                <div className='Companies'>
                    {(flag ? HalfCompanyArray : FullCompanyArray).map((item, index) => (
                        <div className='Company-card' key={index} onClick={() => { window.location.href = `http://localhost:5173/Product/${item.name}` }}>
                            <img src={item.logo} className='Company-logo' />
                        </div>
                    ))}
                </div>
                <button className='ViewAllBtn' onClick={() => setFlag(!flag)}>
                    {`${!flag ? "View Less" : "View All"}`}
                </button>
            </div>
        </div >
    )
}

export default Company;
