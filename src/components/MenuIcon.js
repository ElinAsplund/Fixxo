import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon, quantity}) => {
  return (
    <NavLink className="menu-icon" to={link} end>
        <div className="circle">
            <div className="badge rounded-pill">{quantity}</div>
            <i className={icon}></i>
        </div>
    </NavLink>
  )
}

export default MenuIcon