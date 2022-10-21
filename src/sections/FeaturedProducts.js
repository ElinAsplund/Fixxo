import { useState } from 'react'
import SmallCard from '../components/SmallCard'

const FeaturedProducts =  ({className, title, products}) => {

  console.log(title);

  return (
    <section className={className}>
      <div className="container">
        <h3>{title}</h3>
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