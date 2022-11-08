import React from 'react'

const MenuIcon = ({icon, quantity}) => {
  return (
    <button className="menu-icon">
      <div className="badge rounded-pill">{quantity}</div>
      <i className={icon}></i>
    </button>  
  )
}

export default MenuIcon