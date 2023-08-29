import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo"><p>Velozity</p></div>
        <div className="search">
            <input className='search-input' type="text" placeholder='Search...'/>
            <button className='search-button'>Search</button>
        </div>
    </div>
  )
}

export default Navbar