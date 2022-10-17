import React from 'react'

const SmallCard = () => {
  return (
    <div className="small-card">
        <div className="placeholder-area">
            <div className="card-menu">
                <a href="#">
                    <div className="circle">
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </a>
                <a href="#">
                    <div className="circle">
                        <i className="fa-regular fa-code-compare fa-flip-horizontal"></i>
                    </div>
                </a>
                <a href="#">
                    <div className="circle">
                        <i className="fa-regular fa-bag-shopping"></i>            
                    </div>
                </a>
            </div>
            <button className="btn-bg-theme">QUICK VIEW</button>
        </div>
        <h2>Category</h2>
        <a href="./product.html" className="product-name">Mordern Black Blouse</a>
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