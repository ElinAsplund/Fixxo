import React from 'react'
import SmallCard from '../components/SmallCard'

// How do I add diffrent id's to the cards?
const FeaturedProducts = () => {
  return (
    <section className="featured-products">
        <div className="container">
            <h3>Featured Products</h3>
            <div className="grid">
                <SmallCard id='featured-card-1' />
                <SmallCard id='featured-card-2' />
                <SmallCard id='featured-card-3' />
                <SmallCard id='featured-card-4' />
                <SmallCard id='featured-card-5' />
                <SmallCard id='featured-card-6' />
                <SmallCard id='featured-card-7' />
                <SmallCard id='featured-card-8' />
            </div>
        </div>        
    </section>
  )
}

export default FeaturedProducts