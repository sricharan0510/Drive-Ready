// import { Demo, Sample } from './components/my-comp'
// import Demo from './components/my-comp'
// import Sample from './components/my-comp'
// import { Parent } from './components/Props/Parent'
// import { Render, RenderTwo } from './components/Render/Render'
// import {Card} from './components/Cards/card'
// import Sort from './components/ListAndMaps/Sort'
// import Products from "./components/ListAndMaps/Products"
// import {Events} from './components/EventHandling/Events'
// import {Form} from './components/Forms/Form'
import { RouterHome, Product, Contact } from "./components/RouterPages/RouterHome"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContactPage from "./components/RouterPages/ContactPage"

function App() {

  return (
    <>

      {/* <Demo /> */}
      {/* <Sample /> */}
      {/* <Parent />   */}
      {/* <Render />
      <RenderTwo /> */}
      {/* <Card /> */}
      {/* <Sort /> */}
      {/* <Products/> */}
      {/* <Events /> */}
      {/* <Form /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouterHome />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
