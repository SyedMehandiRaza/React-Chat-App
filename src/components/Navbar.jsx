import React from 'react'
import Add from "../img/Mehandi-dp.jpeg"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Syed Chat</span>
      <div className='user'>
        <img src={Add} alt=''/>
        <span>Zair</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
