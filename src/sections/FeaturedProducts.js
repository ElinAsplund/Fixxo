import SmallCard from '../components/SmallCard'

import { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'

const FeaturedProducts =  ({className, title}) => {
  // const FeaturedProducts =  ({className, title, items=[]}) => {

  const products = useContext(ProductContext)

  return (
    <section className={className}>
      <div className="container">
        <h3>{title}</h3>
        <div className="grid">
          {
            products.allProducts.map(product => <SmallCard item={product} key={product.articleNumber} />)
            // items.map(product => <SmallCard item={product} key={product.articleNumber} />)
          }
        </div>
      </div>        
    </section>
  )
}

export default FeaturedProducts