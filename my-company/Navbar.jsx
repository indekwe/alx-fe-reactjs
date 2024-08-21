import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{backgroundColor: "red"}}>
        <ul style={{display:'flex', justifyContent: 'space-evenly'}}>
           <li><Link style={{listStyleType:'none', textDecoration: 'none', color: 'black'}} to='/'>Home</Link></li>
           <li><Link style={{listStyleType:'none', textDecoration: 'none', color: 'black'}} to='/about'>About</Link></li>
           <li><Link style={{listStyleType:'none', textDecoration: 'none', color: 'black'}} to='/services'>Services</Link></li>
           <li><Link style={{listStyleType:'none', textDecoration: 'none', color: 'black'}} to='/contact'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
