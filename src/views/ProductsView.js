import Breadcrumb from '../sections/Breadcrumb'
import FeaturedProducts from '../sections/FeaturedProducts'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'

import React, { useContext } from 'react';
import { ProductContext } from '../contexts/contexts'

const ProductsView = () => {

  window.top.document.title='Products | Fixxo.'

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
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Products" />
      <div className='container d-flex justify-content-center align-items-center mb-4'><button className="btn-bg-theme" onClick={debug}>DEBUG</button></div>
      <div className='container d-flex justify-content-center align-items-center mb-4'><button className="btn-bg-theme" onClick={assigning}>ASSIGNING (when allProducts)</button></div>
      <FeaturedProducts className='product-browsing mt-0' title="Products" items={productContext.allProducts}/>
      <Footer />
    </>
  )
}

export default ProductsView