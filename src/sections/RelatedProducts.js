import React, { useState } from 'react'
import SmallCard from '../components/SmallCard'

const RelatedProducts = ({productsThree}) => {

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
                productsThree.map(product => <SmallCard item={product} key={product.id} />)
            }
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts