import React from 'react'
import './Render.css'
import styless from './Render.module.css'

export function Render() {
    const flag = true;

    // if(flag == true) {
    //     return (
    //         <div>
    //             <h1>Its True</h1>
    //             <img src={Wallpaper} height={300} width={400}/>
    //         </div>
    //     )
    // }
    // else {
    //     return(
    //         <div>
    //             <h1>Its False</h1>
    //             <div style={{backgroundColor: "yellow",height:"200px",width:"200px"}}></div>
    //         </div>
    //     )
    // }


    // return (
    //     flag ?
    //         <div>
    //             <h1> Its True</h1 >
    //             <img src={Wallpaper} height={300} width={400} />
    //         </div > :
    //         <div>
    //             <h1>Its False</h1>
    //             <div style={{ backgroundColor: "yellow", height: "200px", width: "200px" }}></div>
    //         </div>
    // )


    return (
        <div>
            <h1>Its {`${flag ? 'True' : 'False'}`}</h1>
            <p className={`${flag ? 'heroOne' : 'heroOneDynamic'}`}>Its a condition styling with nrml css</p>
            <p className={`${flag ? styless.heroTwo : styless.heroTwoDynamic}`}>Its a condition styling with module css</p>
        </div>
    )
}

export function RenderTwo() {
    const flag = true;
    return (
        <>
            <h1>Render Two</h1>
            {flag && <h1>true condition</h1>}
        </>
    )
}

