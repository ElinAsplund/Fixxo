import SmallCard from '../components/SmallCard'

const FeaturedProducts =  ({sendingProducts}) => {
  return (
    <section className="featured-products">
      <div className="container">
        <h3>Featured Products</h3>
        <div className="grid">
          {
            sendingProducts.map(products  => <SmallCard item={products} key={products.id} />)
          }
          {/* <SmallCard idCardNumber='featured-card-1' imgUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <SmallCard idCardNumber='featured-card-2' imgUrl="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          <SmallCard idCardNumber='featured-card-3' imgUrl="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
          <SmallCard idCardNumber='featured-card-4' imgUrl="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/> */}
          {/* <SmallCard idCardNumber='featured-card-5' />
          <SmallCard idCardNumber='featured-card-6' />
          <SmallCard idCardNumber='featured-card-7' />
          <SmallCard idCardNumber='featured-card-8' /> */}
        </div>
      </div>        
    </section>
  )
}

export default FeaturedProducts