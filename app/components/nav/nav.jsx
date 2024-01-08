import React from 'react'
import "./nav.css"
import NavLink from 'next/link'
import logo from "../../../public/img/logo.png"
import Image from 'next/image'

const Nav = () => {
  return (
    <nav>
      <div className='nav__logo'>
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>
        <ul className='nav_link__wp'>
            <li className='nav_li' ><NavLink className='nav_link' href="/">Home</NavLink></li>
            <li className='nav_li'><NavLink className='nav_link' href="/components/about">About Me</NavLink></li>
            <li className='nav_li'><NavLink className='nav_link' href="/components/contact">Contact</NavLink></li>
            <li className='nav_li'><NavLink className='nav_link' href="/components/jobs">My Jobs</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav