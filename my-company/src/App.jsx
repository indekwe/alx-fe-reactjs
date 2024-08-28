import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "../Home"
import About from "../About"
import Contact from "../Contact"
import Services from "../Services"

function App() {

  return (
  <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
  </Router>
  )
}

export default App
