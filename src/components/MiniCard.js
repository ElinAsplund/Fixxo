import React from 'react'
import { NavLink } from 'react-router-dom'


// {id: 1, productName: "Mordern Black Blouse", category: "Fashion", price: "$35.00", imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},



const MiniCard = ({item}) => {
  return (
  <div className="mini-card">
    <NavLink className="placeholder-area" to={`/products/${item.productName.replace(/ /gi, "_").toLowerCase()}`} end><img src={item.imgUrl} /></NavLink>
    <div className="text-holder">
      <h2>{item.category}</h2>
      <NavLink to="/products" className="product-name" end>{item.productName}</NavLink>
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
  // <div className={classNames}>
  //   <a href="#" className="placeholder-area"></a>
  //   <div className="text-holder">
  //     <h2>Category</h2>
  //     <NavLink to="/products" className="product-name" end>Mordern Black Blouse</NavLink>
  //     <div className="star-holder">
  //         <i className="fa-sharp fa-solid fa-star"></i>
  //         <i className="fa-sharp fa-solid fa-star"></i>
  //         <i className="fa-sharp fa-solid fa-star"></i>
  //         <i className="fa-sharp fa-solid fa-star"></i>
  //         <i className="fa-sharp fa-solid fa-star"></i>
  //     </div>
  //     <p>$35.00</p>
  //   </div>
  // </div>
  )
}

export default MiniCard