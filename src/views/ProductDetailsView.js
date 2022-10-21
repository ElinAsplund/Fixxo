import React, { useState } from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductInDepthInfo from '../sections/ProductInDepthInfo'
import ProductOverview from '../sections/ProductOverview'
import RelatedProducts from '../sections/RelatedProducts'

const ProductDetailsView = () => {

  const [productsThree, setProductsThree] = useState([
    {id: 1, productName: "Colorful Dress", category: "Fashion", initialPrice:"$43.00", price: "$38.00", imgUrl: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 2, productName: "Tank Top", category: "Basic", price: "$20.00", imgUrl: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMyfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {id: 3, productName: "Pattern Dress", category: "Fashion", price: "$40.00", imgUrl: "https://images.unsplash.com/photo-1602414336756-1d5b26bbbdf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id: 4, productName: "Jeans Jacket", category: "Fashion", price: "$45.00", imgUrl: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM0fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
])

  return (
    <>
      <MainMenu className="bg-white" />
      <CurrentOfferBanner />
      <Breadcrumb currentPage="Product Signal" />
      <ProductOverview />
      <ProductInDepthInfo />
      <RelatedProducts productsThree={productsThree} />
      <Footer />
    </>
  )
}

export default ProductDetailsView