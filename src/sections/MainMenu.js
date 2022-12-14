import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const MainMenuSection = ({className}) => {
  const [showMenu, setShowMenu] = useState(false)
  const  { cartQuantity } = useShoppingCart()

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
          <MenuIcon icon="fa-regular fa-magnifying-glass" quantity="" />
          <MenuIcon icon="fa-regular fa-code-compare fa-flip-horizontal" quantity="" />
          <MenuIcon icon="fa-regular fa-heart" quantity="" />
          <button className="menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <i className="fa-regular fa-bag-shopping"></i>
            <div className="badge rounded-pill">{cartQuantity}</div>
          </button>
          <button onClick={toggleMenu} className={`menu-icon ${ showMenu ? "btn-menu-icon-white" : "btn-menu-icon" }`}><i className='fa-regular fa-bars'></i></button>
        </div>
      </nav>
    </header>
  )
}

export default MainMenuSection