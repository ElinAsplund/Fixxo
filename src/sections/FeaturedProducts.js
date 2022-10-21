import { useState } from 'react'
import SmallCard from '../components/SmallCard'

const FeaturedProducts =  ({products}) => {

  return (
    <section className="featured-products">
      <div className="container">
        <h3>Featured Products</h3>
        <div className="grid">
          {
            products.map(product => <SmallCard item={product} key={product.id} />)
          }
        </div>
      </div>        
    </section>
  )
}

export default FeaturedProducts