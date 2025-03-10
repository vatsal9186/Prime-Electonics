/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import About from './Pages/About/About';
// import Laptop from './Pages/Products/Products/Laptop';
import ShopCategory from './Pages/ShopCategory';








function App() {


  return (
    <>
      

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Laptops' element={<ShopCategory category="Laptops" />} />
        <Route path='/Mobile' element={<ShopCategory category="Mobile"/> } />
        <Route path='/TV' element={<ShopCategory category="TV"/> } />
        <Route path='/AC' element={<ShopCategory category="AC"/> } />
        <Route path='/Wash' element={<ShopCategory category="Wash"/> } />
        <Route path='/Refrigerator' element={<ShopCategory category="Refrigerator"/> } />
      </Routes>
    </Router>



    </>
  )
}

export default App
