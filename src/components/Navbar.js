import React from 'react'
import logo from '../images/ans-130sq.png'
// import {Navlink} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav style={{padding : "20px" }}>
            <div className='flex justify-around' style={{alignItems:"center"}}>
                <div className='logo'>
                    <img src={logo} alt="ANS Logo" />
                </div>
                <div className='menus flex justify-evenly' style={{width:"35%"}}>
                    <li>Home</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Why choose ANS</li>
                    <li>Blog</li>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar