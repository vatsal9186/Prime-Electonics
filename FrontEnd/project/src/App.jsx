/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import About from './Pages/About/About';



function App() {


  return (
    <>
      

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>



    </>
  )
}

export default App
