import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from './MenuIcon'

const SmallCard = ({id, imgUrl}) => {
  return (
    <div className="small-card" id={id}>
        <div className="placeholder-area">
            <img src={imgUrl}/>
            <div className="card-menu">
                <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
                <MenuIcon link="/compare" icon="fa-regular fa-code-compare fa-flip-horizontal" />
                <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
            </div>
            <button className="btn-bg-theme">QUICK VIEW</button>
        </div>
        <h2>Category</h2>
        <NavLink to="/products" className="product-name" end>Mordern Black Blouse</NavLink>
        <div className="star-holder">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
        </div>
        <p><span></span> $35.00</p>
    </div>
    )
}

export default SmallCard