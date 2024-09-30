import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export function RouterHome() {
  return (
    <div style={{display:'flex', alignItems: "center", justifyContent: "center", flexDirection: 'column', height:500}}>
      <h2>Header</h2>
      <div>
        <Link to='/Product'>Product</Link> <br></br><br></br>
        <Link to='/Contact'>Contact</Link>
      </div>
      <Outlet />
      <h2>Footer</h2>
    </div>  
  )
}

export function Product() {
  return(
    <div>
      This is Product Page
    </div>
  )
}

export function Contact() {
  return(
    <div>
      This is Contact Page
    </div>
  )
}
