import React from 'react'
import logo from '../assets/images/fixxo-logo.svg'
import NavLinks from './NavLinks'
import NavIcons from './NavIcons'

const Header = () => {
  return (
    <header className="gradient-grey">
        <nav>
            <a href="index.html"><img src={logo} alt='fixxo' /></a>
            <NavLinks />
            <NavIcons />
        </nav>
    </header>
  )
}

export default Header