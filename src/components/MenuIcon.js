import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon, badge}) => {
  return (
    <NavLink className="menu-icon" to={link} end>
        <div className="circle">
            <div className="badge rounded-pill">3</div>
            <i className={icon}></i>
        </div>
    </NavLink>
  )
}

export default MenuIcon