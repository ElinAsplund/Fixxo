import SmallCard from '../components/SmallCard'

const FeaturedProducts =  ({className, title, items=[]}) => {

  return (
    <section className={className}>
      <div className="container">
        <h3>{title}</h3>
        <div className="grid">
          {
            items.map(product => <SmallCard item={product} key={product.articleNumber} />)
          }
        </div>
      </div>        
    </section>
  )
}

export default FeaturedProducts