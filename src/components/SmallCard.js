import React from 'react'
import { NavLink } from 'react-router-dom'

const SmallCard = (item) => {

    // To be able to get and use the items properties, I need to do this:
    // https://stackoverflow.com/questions/17546953/cant-access-object-property-even-though-it-shows-up-in-a-console-log
    // console.log(Object.keys(item))

    let objectString = JSON.stringify(item)
    let newObject = JSON.parse(objectString)

    // card-menu onClick-events
    const addToWishList = (e) => {
        console.log("added to wish list");
    }
    const addToCompare = (e) => {
        console.log("added to compare");
    }
    const addToCart = (e) => {
        console.log("added to cart");
    }

    return (
        <div className="small-card" id={newObject.item.idCardNumber}>
            <div className="placeholder-area">
                <img src={newObject.item.imgUrl} />
                <div className="card-menu btn-no-corners">
                    <button onClick={addToWishList} className='btn-menu-icon'><i className='fa-regular fa-heart'></i></button>
                    <button onClick={addToCompare} className='btn-menu-icon'><i className='fa-regular fa-code-compare fa-flip-horizontal'></i></button>
                    <button onClick={addToCart}className='btn-menu-icon'><i className='fa-regular fa-bag-shopping'></i></button>
                </div>
                <NavLink to={`/products/${newObject.item.productName.replace(/ /gi, "_").toLowerCase()}`}end>
                    <button className="btn-bg-theme btn-quick-view">QUICK VIEW</button>
                </NavLink>
            </div>
            <h2>{newObject.item.category}</h2>
            <NavLink to={`/products/${newObject.item.productName.replace(/ /gi, "_").toLowerCase()}`} className="product-name" end>{newObject.item.productName}</NavLink>
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