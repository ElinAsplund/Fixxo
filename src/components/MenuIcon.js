import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon, quantity}) => {
  return (
    <NavLink className="menu-icon" to={link} end>
      <div className="badge rounded-pill">{quantity}</div>
      <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon