import React from 'react'
import { NavLink } from 'react-router-dom'

const SmallCard = (item) => {

    // https://stackoverflow.com/questions/17546953/cant-access-object-property-even-though-it-shows-up-in-a-console-log
    // console.log(Object.keys(item))

    let objectString = JSON.stringify(item)
    let newObject = JSON.parse(objectString)
    
    return (
        <div className="small-card" id={newObject.item.idCardNumber}>
            <div className="placeholder-area">
                <img src={newObject.item.imgUrl} />
                <div className="card-menu btn-no-corners">
                    <button className='btn-menu-icon'><i className='fa-regular fa-heart'></i></button>
                    <button className='btn-menu-icon'><i className='fa-regular fa-code-compare fa-flip-horizontal'></i></button>
                    <button className='btn-menu-icon'><i className='fa-regular fa-bag-shopping'></i></button>
                </div>
                <NavLink to={`/products`} end>
                    <button className="btn-bg-theme btn-quick-view">QUICK VIEW</button>
                </NavLink>
            </div>
            <h2>{newObject.item.category}</h2>
            <NavLink to="/products" className="product-name" end>{newObject.item.productName}</NavLink>
            <div className="star-holder">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </div>
            <p><span id="before-discount-price">{newObject.item.initialPrice}</span> {newObject.item.price}</p>
        </div>
    )
}

export default SmallCard