// import React from 'react'
// import './card.css'
// import myimg from '../../assets/react.svg'
// import appleimg from '../../assets/apple.jpg'

// export function Card() {
//     const flag = false;
//     return (
//         <>
//             <div className='my-card'>
//                 <img src={flag ? myimg : appleimg} height={150} width={150} />
//                 <p>Apple</p>
//                 <button className={`${flag ? 'card-button' : 'changed-card-button'}`}>Click Me</button>
//             </div>
//             <div className='my-card'>
//                 <img src={!flag ? myimg : appleimg} height={150} width={150} />
//                 <p>React</p>
//                 <button className={`${!flag ? 'card-button' : 'changed-card-button'}`}>Click Me</button>
//             </div>

//         </>
//     )
// }

import React, { useState } from 'react'
import './card.css'
import myimg from '../../assets/react.svg'
import appleimg from '../../assets/apple.jpg'
import { AiFillLike } from "react-icons/ai";

export function Card() {
    const [flag, setFlag] = useState(false);
    return (
        <>
            <div className='my-card'>
                <img src={!flag ? myimg : appleimg} height={150} width={150} />
                <div className='like'> <AiFillLike className={`${!flag ? 'my-icon' : 'my-icon-click'}`} />
                    <p className='my-text'>{`${!flag ? "React" : "Apple"}`}</p>
                </div>
                <button className={`${!flag ? 'card-button' : 'changed-card-button'}`} onClick={() => setFlag(!flag)}>
                    {`${!flag ? 'Apple' : 'React'}`}</button>
            </div>

        </>
    )
}

