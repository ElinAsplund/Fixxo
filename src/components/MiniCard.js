import React from 'react'

const MiniCard = () => {
  return (
    <div className="mini-card first-coloumn">
    <a href="#" className="placeholder-area"></a>
    <div className="text-holder">
        <h2>Category</h2>
        <a href="./product.html" className="product-name">Mordern Black Blouse</a>
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