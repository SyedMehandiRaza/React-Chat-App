import React from 'react'
import Add from "../img/Mehandi-dp.jpeg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Syed Chat</span>
      <div className='user'>
        <img src={Add} alt=''/>
        <span>Zair</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
