import React, { useState } from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import FeaturedProducts from '../sections/FeaturedProducts'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'

const ProductsView = () => {

  const [productsThree, setProductsThree] = useState([
    {id: 1, productName: "Mordern Black Blouse", category: "Fashion", price: "$35.00", imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 2, productName: "Happy Sweatshirt", category: "Basic", price: "$25.00", imgUrl: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 3, productName: "Colorful Dress", category: "Fashion", initialPrice:"$43.00", price: "$38.00", imgUrl: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 4, productName: "Jeans Jacket", category: "Fashion", price: "$45.00", imgUrl: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM0fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 5, productName: "Blue Basic T-shirt", category: "Basic", price: "$15.00", imgUrl: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc4fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 6, productName: "Pattern Dress", category: "Fashion", price: "$40.00", imgUrl: "https://images.unsplash.com/photo-1602414336756-1d5b26bbbdf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 7, productName: "Knitted Jumper", category: "Fashion", price: "$35.00", imgUrl: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzU4fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 8, productName: "Tank Top", category: "Basic", price: "$20.00", imgUrl: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMyfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 9, productName: "Fine hoodie", category: "Casual", initialPrice:"$25.00", price: "$20.00", imgUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 10, productName: "Nice hat", category: "Accessories", price: "$15.00", imgUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 11, productName: "Extreme Pattern Shirt", category: "Fashion", price: "$35.00", imgUrl: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHNoaXJ0JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 12, productName: "Yellow Two Piece Set", category: "Casual", price: "$40.00", imgUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
])

  return (
    <>
      <MainMenu className="bg-white" />
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Products" />
      <FeaturedProducts className='product-browsing mt-0' title="Products" products={productsThree}/>
      <Footer />
    </>
  )
}

export default ProductsView