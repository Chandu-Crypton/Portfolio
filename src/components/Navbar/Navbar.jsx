import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import {Link} from 'react-router-dom'
import Hero from '../Hero/Hero';
const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
  return (
    <>
    <MobileNav isOpen={openMenu} toogleMenu={toggleMenu}/>

      <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className="logo" src="" alt=""/>
            <ul>
                <li>
                    <Link to='/home' className='menu-item'>Home</Link>
                </li>
                <li>
                    <Link to='/skills'  className='menu-item'>Skills</Link>
                </li>
                <li>
                    <Link to='/contactme' className='menu-item'>Contact Me</Link>
                </li>

                <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
            </ul>

            <button class='menu-btn' onClick={toggleMenu}>
                <span className={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>
                    {openMenu ? "close" : "menu"}
                </span>
            </button>
        </div>
      </nav>
      <Hero/>
    </>
  )
}

export default Navbar
