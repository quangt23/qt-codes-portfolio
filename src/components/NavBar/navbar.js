import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <header>
    <nav>
        <div className ="nav_links">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem'>/ home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='listItem'>/ about</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className='listItem'>/ experience</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='listItem'>/ projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem'>/ contact</Link>
        </div>
    </nav>
    </header>
  )
}

export default NavBar;