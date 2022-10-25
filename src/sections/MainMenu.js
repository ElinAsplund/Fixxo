import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = ({className}) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={className}>
        <nav>
            <NavLink to="/" className="logo-link" end>Fixxo.</NavLink>
            <div className={`nav-links ${ showMenu ? "d-grid" : "" }`}>
                <NavLink to="/" className="nav-link" end>Home</NavLink>
                <NavLink to="/categories" className="nav-link" end>Categories</NavLink>
                <NavLink to="/products" className="nav-link">Products</NavLink>
                <NavLink to="/contacts" className="nav-link" end>Contacts</NavLink>
            </div>
            <div className="nav-icons btn-no-corners">
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
                <MenuIcon link="/compare" icon="fa-regular fa-code-compare fa-flip-horizontal" />
                <MenuIcon link="/wishlist" icon="fa-regular fa-heart" quantity="1" />
                <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" quantity="3" />
                <button onClick={toggleMenu} className={`menu-icon ${ showMenu ? "btn-menu-icon-white" : "btn-menu-icon" }`}><i className='fa-regular fa-bars'></i></button>
            </div>
        </nav>
    </header>
  )
}

export default MainMenuSection