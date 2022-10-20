import React, { useState } from 'react'
import SmallCard from '../components/SmallCard'

const RelatedProducts = () => {
    const [products, setProducts] = useState([
        {id: 1, productName: "Mordern Black Blouse", category: "Fashion", price: "$35.00", imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
        {id: 2, productName: "Extreme Pattern Shirt", category: "Fashion", price: "$35.00", imgUrl: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHNoaXJ0JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
        {id: 3, productName: "Fine hoodie", category: "Casual", initialPrice:"$25.00", price: "$20.00", imgUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
        {id: 4, productName: "Nice hat", category: "Accessories", price: "$15.00", imgUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
      ])

  return (
    <section className="related-products">
        <div className="container">
            <div className="related-products-menu">
                <h1>Related Products</h1>
                <div className="scroll-arrows-holder btn-no-corners">
                    <button className="scroll-arrow">
                        <i className="fa-regular fa-chevron-left"></i>
                    </button>
                    <button className="scroll-arrow">
                        <i className="fa-regular fa-chevron-right"></i>
                    </button>
                </div>
            </div>    
            <div className="grid">
            {
                products.map(product => <SmallCard item={product} key={product.id} />)
            }
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts