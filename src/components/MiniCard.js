import React from 'react'
import { NavLink } from 'react-router-dom'

const MiniCard = ({classNames}) => {
  return (
    <div className={classNames}>
    <a href="#" className="placeholder-area"></a>
    <div className="text-holder">
        <h2>Category</h2>
        <NavLink to="/products" className="product-name" end>Mordern Black Blouse</NavLink>
        <div className="star-holder">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
        </div>
        <p>$35.00</p>
    </div>
</div>
  )
}

export default MiniCard