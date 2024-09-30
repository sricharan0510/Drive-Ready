import React from 'react'
import { useState } from 'react'
import './Events.css'

export const Events = () =>  {
    const [counter, setCOunter] = useState(0)
    const IncClick = () => {
        counter == 10 ? setCOunter(0) : setCOunter(counter + 1) 
    }
    const DecClick = () => {
        counter == 0 ? setCOunter(10) : setCOunter(counter - 1)
    }

    const [text, setText] = useState('')
    const onChangeFun = (e) => {
        setText(e.target.value)
    }

    const [flag, setFlag] = useState(true)
    const setFlagFun = () => {
      setFlag(!flag);
    }

  return (
    <div>
      <button onClick={() => console.log("Its Clicked")}>Click me</button> <br></br> <br></br>
        <button onClick={IncClick}>+</button>
        <p>Counter:{`${counter}`}</p>
        <button onClick={DecClick}>-</button> <br></br> <br></br>
        <input type='text' onChange={(e) => onChangeFun(e)}/>
        <p>Typed Text : {`${text}`}</p> <br></br> 
        <div onMouseEnter={() => console.log("Green Enter")} style={{height:100, width:100, backgroundColor:"Green"}}></div>
        <div onMouseLeave={() => console.log("Red Leave")} style={{height:100, width:100, backgroundColor:"Red"}}></div>
        <div onMouseEnter= {setFlagFun} className={`${flag ? 'before' : 'after'}`}></div>
        <div onMouseEnter= {setFlagFun} className={`${flag ? 'after' : 'before'}`}></div>
        <div className="divOne"></div>
        <div className="divTwo"></div>

    </div>
  )
}

