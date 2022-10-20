import { useState } from 'react'
import SmallCard from '../components/SmallCard'

const FeaturedProducts =  () => {

  const [products, setProducts] = useState([
    {id: 1, idCardNumber:"featured-card-1", productName: "Mordern Black Blouse", category: "Fashion", price: "$35.00", imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 2, idCardNumber:"featured-card-2", productName: "Happy Sweatshirt", category: "Basic", price: "$25.00", imgUrl: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 3, idCardNumber:"featured-card-3", productName: "Colorful Dress", category: "Fashion", initialPrice:"$43.00", price: "$38.00", imgUrl: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 4, idCardNumber:"featured-card-4", productName: "Jeans Jacket", category: "Fashion", price: "$45.00", imgUrl: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM0fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 5, idCardNumber:"featured-card-5", productName: "Blue Basic T-shirt", category: "Basic", price: "$15.00", imgUrl: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc4fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 6, idCardNumber:"featured-card-6", productName: "Tank Top", category: "Basic", price: "$20.00", imgUrl: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMyfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 7, idCardNumber:"featured-card-7", productName: "Pattern Dress", category: "Fashion", price: "$40.00", imgUrl: "https://images.unsplash.com/photo-1602414336756-1d5b26bbbdf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 8, idCardNumber:"featured-card-8", productName: "Knitted Jumper", category: "Fashion", price: "$35.00", imgUrl: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzU4fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
  ])

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