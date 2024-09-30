import React from 'react'
import '../Cards/card.css'
import { useState } from 'react'

function Sort() {
    const Cycles = [
        {
            image: "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw27b4d07c/Products/F11/BCF1120BLBK001/medium.png?sh=160&sfrm=png",
            name: "F11--1",
            cost: 66000,
            colors: ["blue", "black"],
        },
        {
            image: "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dwfa04c612/Products/NewVoltage/RedGrey/310x160.png?sh=160&sfrm=png",
            name: "New Voltage--2",
            cost: 11000,
            colors: ["red", "grey"],
        },
        {
            image: "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw00724f10/Products/Slingshot/BCSLS26BKGN001/Medium%20(1).png?sh=160&sfrm=png",
            name: "SlingShot--3",
            cost: 70030,
            colors: ["black", "green"],
        },
        {
            image: "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw2258ac66/Products/Milano/BSMIL27GY00002/medium.png?sh=160&sfrm=png",
            name: "ThunderBolt--4",
            cost: 1000,
            colors: ["orange", "blue"],
        }
    ]
    // const sortedCycles = Cycles.sort((a, b) => a.cost - b.cost);

    const [cycle, setCycle] = useState(Cycles);
    const sortData = () => {
        // const DummyCycles = [...cycle]
        // DummyCycles.sort((a, b) => a.cost - b.cost)
        // setCycle(DummyCycles)
        cycle.sort((a, b) => a.cost - b.cost)
        setCycle([...cycle])
    }

    // const total = () => { 
    //     let sum = 0
    //     for (let i = 0; i < cycle.length; i++) {
    //         sum += cycle[i].cost
    //     }
    //     return sum
    // }

    const total = () => {
        return cycle.reduce((sum, item) => sum+item.cost, 0)
    }

    return (
        <>
            <div className='totalDiv'>
                <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'yellow', justifyContent: 'center' }}>
                    {cycle.map((cycle, index) => (
                        <div key={index} className="my-card">
                            <img src={cycle.image} height={120} width={200} />
                            <h3>{cycle.name}</h3>
                            <p>Cost: {cycle.cost}</p>
                            <p>{cycle.colors.map((color) => (
                                <span key={color} style={{ backgroundColor: color, width: 20, height: 20, display: 'inline-block' }}></span>
                            )
                            )}</p>
                        </div>
                    ))}
                </div>
                <h2>Total Cost: {total()}</h2>
                <button onClick={sortData} className='sortButton'>Sort</button>
            </div>
        </>
    )
}

export default Sort
