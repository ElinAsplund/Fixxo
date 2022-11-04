import { useParams } from 'react-router-dom'
import Breadcrumb from '../sections/Breadcrumb'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductInDepthInfo from '../sections/ProductInDepthInfo'
import ProductOverview from '../sections/ProductOverview'
import RelatedProducts from '../sections/RelatedProducts'

import React, { useContext } from 'react';
import { ProductContext } from '../contexts/contexts'


const ProductDetailsView = () => {
  
  const params = useParams()

  // const thisProduct = productContext.allProducts.find(obj => {
  //   return obj.articleNumber == params.id
  // }) 

  // To get rid of the _ and capitalize the first letter:
  // https://flexiple.com/javascript/javascript-capitalize-first-letter/#section2
  let activeProduct = params.productName
  activeProduct = activeProduct.replace(/_/gi, " ")
  
  let eachWord = activeProduct.split(" ")
  
  for (let i = 0; i < eachWord.length; i++) {
    eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].slice(1);
  }
  
  activeProduct = eachWord.join(" ");
  
  window.top.document.title = activeProduct +' | Fixxo.'

  const productContext = useContext(ProductContext)

  const debug = () =>{
    console.log("---CLICK!---")
    console.log(productContext.allProducts)
    console.log(productContext.fourProducts)
    console.log(productContext.eighthProducts)
    console.log(productContext.nineProducts)
    

  }

  const assigning = () =>{
    console.log("---ASSIGNING---")

    for (let i=0 ; i<4 ; i++){
      productContext.fourProducts.push(productContext.allProducts[i])
    }
    for (let i=0 ; i<8 ; i++){
      productContext.eighthProducts.push(productContext.allProducts[i])
    }
    for (let i=0 ; i<9 ; i++){
      productContext.nineProducts.push(productContext.allProducts[i])
    }
    console.log(productContext.allProducts)
    console.log(productContext.fourProducts)
    console.log(productContext.eighthProducts)
    console.log(productContext.nineProducts)
  }

  return (
    <>
      <MainMenu className="bg-white" />
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-block" currentPage={activeProduct} />
      <CurrentOfferBanner />
      <ProductOverview />
      <ProductInDepthInfo />
      <div className='container d-flex justify-content-center align-items-center mb-4'><button className="btn-bg-theme" onClick={debug}>DEBUG</button></div>
      <div className='container d-flex justify-content-center align-items-center mb-4'><button className="btn-bg-theme" onClick={assigning}>ASSIGNING (when allProducts)</button></div>
      <RelatedProducts />
      <Footer />
    </>
  )
}

export default ProductDetailsView