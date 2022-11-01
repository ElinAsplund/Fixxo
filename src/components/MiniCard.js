import React from 'react'
import { NavLink } from 'react-router-dom'


const MiniCard = ({item}) => {
  return (
    <div className="mini-card">
      <NavLink className="placeholder-area" to={`/products/${item.name.replace(/ /gi, "_").toLowerCase()}`} end><img src={item.imageName} /></NavLink>
      <div className="text-holder">
        <h2>{item.category}</h2>
        <NavLink to="/products" className="product-name" end>{item.name}</NavLink>
        <div className="star-holder">
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </div>
        <p>{item.price}</p>
      </div>
    </div>
  )
}

export default MiniCard