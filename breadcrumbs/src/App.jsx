import './App.css'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing'
import ProductDetails from './pages/ProductDetails'
import Breadcrumb from './components/Breadcrumb'

import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <h1>ShopKart</h1>

      <BrowserRouter>
        <Breadcrumb/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProductListing/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
