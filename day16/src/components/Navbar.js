import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <nav className='list'>
            
        <Link className='links' to="/" >Home</Link>
                <Link className='links'  to="/about">About</Link>
                <Link className='links' to="/contact">Contact</Link>
            
        </nav>
    </div>
  )
}

export default Navbar