import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
   <nav className='navbar'>
    <ul >
        <Link to={"/"}>Home</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/Users"}>Users</Link>
        <Link to={"/About "}>About</Link>
        <Link to={"/counter "}>Counterpage</Link>


    </ul>
   </nav>
    </div>

  )
}

export default Navbar
