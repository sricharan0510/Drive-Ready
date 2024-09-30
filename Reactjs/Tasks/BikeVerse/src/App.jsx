import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Product from './Components/Products/Product'
import HomePage from './Components/Companies/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <MainHeading /> */}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/Product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App


