import React from 'react'
import { useState } from 'react'

function Products() {
    const dataObj = [
        {
            "productId": "E001",
            "productName": "Smartphone X200",
            "brand": "TechGiant",
            "price": 699.99,
            "inStock": true,
            "rating": 4.7,
            "features": ["5G", "128GB Storage", "12MP Camera"],
            "warranty": "2 years",
            liked: false
        },
        {
            "productId": "E002",
            "productName": "4K Ultra HD TV",
            "brand": "VisionPlus",
            "price": 1199.99,
            "inStock": false,
            "rating": 4.5,
            "features": ["4K Resolution", "Smart TV", "HDR10"],
            "warranty": "1 year",
            liked: false
        },
        {
            "productId": "E003",
            "productName": "Wireless Earbuds",
            "brand": "SoundWave",
            "price": 89.99,
            "inStock": true,
            "rating": 4.3,
            "features": ["Bluetooth 5.0", "Noise Cancelling", "20-hour Battery Life"],
            "warranty": "6 months",
            liked: false
        },
        {
            "productId": "E004",
            "productName": "Smartwatch Pro",
            "brand": "TimeTech",
            "price": 249.99,
            "inStock": true,
            "rating": 4.6,
            "features": ["Heart Rate Monitor", "GPS", "Water Resistant"],
            "warranty": "1 year",
            liked: false
        },
        {
            "productId": "E005",
            "productName": "Laptop Z5",
            "brand": "ComputeX",
            "price": 1299.99,
            "inStock": true,
            "rating": 4.8,
            "features": ["Intel i7 Processor", "16GB RAM", "512GB SSD"],
            "warranty": "2 years",
            liked: false
        },
        {
            "productId": "E006",
            "productName": "Bluetooth Speaker",
            "brand": "EchoSound",
            "price": 45.99,
            "inStock": true,
            "rating": 4.2,
            "features": ["Portable", "Waterproof", "10-hour Battery Life"],
            "warranty": "1 year",
            liked: false
        },
        {
            "productId": "E007",
            "productName": "Action Camera 4K",
            "brand": "AdventureCam",
            "price": 349.99,
            "inStock": false,
            "rating": 4.4,
            "features": ["4K Video", "Waterproof", "Wi-Fi Connectivity"],
            "warranty": "1 year",
            liked: false
        },
        {
            "productId": "E008",
            "productName": "Home Theater System",
            "brand": "CinemaMax",
            "price": 899.99,
            "inStock": true,
            "rating": 4.6,
            "features": ["Surround Sound", "Blu-ray Player", "Wireless Connectivity"],
            "warranty": "2 years",
            liked: false
        },
        {
            "productId": "E009",
            "productName": "Digital Camera D550",
            "brand": "PhotoGenix",
            "price": 549.99,
            "inStock": true,
            "rating": 4.5,
            "features": ["24MP Sensor", "Wi-Fi Enabled", "Full HD Video"],
            "warranty": "1 year",
            liked: false
        },
        {
            "productId": "E010",
            "productName": "Portable Power Bank",
            "brand": "ChargeMate",
            "price": 29.99,
            "inStock": true,
            "rating": 4.1,
            "features": ["10,000mAh Capacity", "Dual USB Ports", "Compact Design"],
            "warranty": "6 months",
            liked: false
        }
    ]

     const [data, setData] = useState(dataObj)

    const sortFun = () => {
        const dummyData = [...data]
        dummyData.sort((a, b) => a.price - b.price)
        setData(dummyData)
    }

    const [searchValue, setSearchValue] = useState('')
    const searchParameter = (e) => {
        const searchValue = e.target.value
        setSearchValue(searchValue)
    }

    const searchedDt = searchValue.toLowerCase()
    const filteredData = data.filter((item) => {
        const nameFilter = item.productName.toLowerCase().includes(searchedDt);
        const priceFilter = item.price.toString().includes(searchedDt);
        return nameFilter || priceFilter
    })

    const displayData = searchValue ? filteredData : data;

    // const likedForEach = (id) => {
    //     const dumData = [...displayData]
    //     dumData.forEach((item)=> {
    //         if(item.productId === id) {
    //             item.liked = !item.liked;
    //         }
    //     })
    // } 

    const dataCost = displayData.reduce((sum,item)=> sum + item.price, 0)

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
                <button onClick={sortFun}>Sort</button>
                <input type='text' placeholder='Search' style={{ margin: 15, padding: 3 }} onChange={(e) => searchParameter(e)} />
                <h3>Total Cost: {dataCost}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: 'center' }}>
                    {
                    displayData.map((item, index) => (
                        <div key={index} style={{ border: 'solid black', margin: 5, height: 250, width: 350, display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
                            <h3>{item.productName}</h3>
                            <p>Price: {item.price}</p>
                            <p>Rating: {item.rating}</p>
                            <p>{item.features.map((feature) => (
                                <span key={feature}>{feature}</span>
                            )
                            )}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products