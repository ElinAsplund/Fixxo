import { useParams } from 'react-router-dom'
import Breadcrumb from '../sections/Breadcrumb'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductInDepthInfo from '../sections/ProductInDepthInfo'
import ProductOverview from '../sections/ProductOverview'
import RelatedProducts from '../sections/RelatedProducts'

import React, { useState, useEffect } from 'react';


const ProductDetailsView = () => {
  const [productInfo, setProductInfo] = useState({})  
  const params = useParams()

  useEffect(() => {
    const fetchProductInfo = async () => {
      const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${params.articleNumber}`)
      setProductInfo(await result.json())
    }
    fetchProductInfo()

  }, [setProductInfo])
  
  window.top.document.title = productInfo.name +' | Fixxo.'


  // ------------------------------------------------------------------------------
  // PRODUCT INFO BUTTON:
  const productInformation = () =>{
    console.log("articleNumber: " + productInfo.articleNumber)
    console.log("name: " + productInfo.name)
    console.log("category: " + productInfo.category)
    console.log("price: " + productInfo.price)
    console.log("rating: " + productInfo.rating)
    console.log("imageName: " + productInfo.imageName)
  }

  return (
    <>
      <MainMenu className="bg-white" />
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-block" currentPage={productInfo.name} />
      <CurrentOfferBanner />
      <ProductOverview />
      <ProductInDepthInfo />
      {/* <div className='container d-flex justify-content-center align-items-center mb-4'><button className="btn-bg-theme" onClick={productInformation}>PRODUCT INFO</button></div> */}
      <RelatedProducts />
      <Footer />
    </>
  )
}

export default ProductDetailsView