import React from 'react'
import logo from '../assets/images/fixxo-logo.svg'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <header className="gradient-grey">
        <nav>
            <NavLink to="/" className="logo-link" end><img src={logo} alt='fixxo' /></NavLink>
            <div className="nav-links">
                <NavLink to="/" className="nav-link" end>Home</NavLink>
                <NavLink to="/categories" className="nav-link" end>Categories</NavLink>
                <NavLink to="/products" className="nav-link" end>Products</NavLink>
                <NavLink to="/contacts" className="nav-link" end>Contacts</NavLink>
            </div>
            <div className="nav-icons">
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
                <MenuIcon link="/compare" icon="fa-regular fa-code-compare fa-flip-horizontal" />
                <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
                <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
            </div>
        </nav>
    </header>
  )
}

export default MainMenuSection