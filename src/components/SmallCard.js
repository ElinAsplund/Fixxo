import React from 'react'
import { NavLink } from 'react-router-dom'
import placeholder from "../assets/images/male-upclose.svg"

const SmallCard = ({item}) => {
  return (
    <div className="small-card">
    {/* <div className="small-card" id={item.idCardNumber}> */}
        <div className="placeholder-area">
            <img src={placeholder} />
            <div className="card-menu btn-no-corners">
                <button className='btn-menu-icon'><i className='fa-regular fa-heart'></i></button>
                <button className='btn-menu-icon'><i className='fa-regular fa-code-compare fa-flip-horizontal'></i></button>
                <button className='btn-menu-icon'><i className='fa-regular fa-bag-shopping'></i></button>
            </div>
            <NavLink to={`/products`} end>
                <button className="btn-bg-theme btn-quick-view">QUICK VIEW</button>
            </NavLink>
        </div>
        <h2>{item.category}</h2>
        <NavLink to="/products" className="product-name" end>{item.productName}</NavLink>
        <div className="star-holder">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
        </div>
        <p><span id="before-discount-price"></span> {item.price}</p>
    </div>
    )
}

export default SmallCard