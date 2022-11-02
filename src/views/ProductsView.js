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

  return (
    <>
      <MainMenu className="bg-white" />
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Products" />
      <div className='container d-flex justify-content-center align-items-center mb-4'><button className="btn-bg-theme" onClick={debug}>DEBUG</button></div>
      <FeaturedProducts className='product-browsing mt-0' title="Products" items={productContext.allProducts}/>
      <Footer />
    </>
  )
}

export default ProductsView