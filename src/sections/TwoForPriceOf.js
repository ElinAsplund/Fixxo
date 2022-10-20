import React, { useState } from 'react'
import SmallCard from '../components/SmallCard'
import LgCard from '../components/LgCard'

const TwoForPriceOf = () => {

    const [products, setProducts] = useState([
        {id: 1, idCardNumber:"price-card-2", productName: "Knitted Jumper", category: "Fashion", price: "$35.00", imgUrl: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzU4fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
        {id: 2, idCardNumber:"price-card-3", productName: "Fine hoodie", category: "Casual", initialPrice:"$25.00", price: "$20.00", imgUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
        {id: 3, idCardNumber:"price-card-4", productName: "Nice hat", category: "Accessories", price: "$15.00", imgUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
        {id: 4, idCardNumber:"price-card-5", productName: "Extreme Pattern Shirt", category: "Fashion", price: "$35.00", imgUrl: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHNoaXJ0JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
      ])

  return (
    <section className="two-for-price-of ">
        {/* grid 1 */}
        <div id="grid-justify-start">
            <div className="grid-holder" id="grid-holder-first">
                <div className="grid">
                    <LgCard heading="2 FOR USD $29" id="lg-card-1"/>
                    {
                        products.map(product => <SmallCard item={product} key={product.id} />)
                    } 
                    {/* <LgCard heading="2 FOR USD $29" id="lg-card-1"/>
                    <SmallCard id="price-card-2" />
                    <SmallCard id="price-card-3" />
                    <SmallCard id="price-card-4"/>
                    <SmallCard id="price-card-5"/> */}
                </div>
            </div>
        </div>
        {/* grid 2 */}
        <div id="grid-justify-end">
            <div className="grid-holder" id="grid-holder-second">
                <div className="grid">
                    {
                        products.map(product => <SmallCard item={product} key={product.id} />)
                    } 
                    <LgCard heading="2 FOR USD $49" id="lg-card-2"/>
                    {/* <SmallCard id="price-card-6" />
                    <SmallCard id="price-card-7" />
                    <SmallCard id="price-card-8" />
                    <SmallCard id="price-card-9" />
                    <LgCard heading="2 FOR USD $49" id="lg-card-2"/> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default TwoForPriceOf