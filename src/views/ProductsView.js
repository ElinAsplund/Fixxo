import Breadcrumb from '../sections/Breadcrumb'
import FeaturedProducts from '../sections/FeaturedProducts'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import React, { useContext } from 'react';
import { ProductContext } from '../contexts/contexts'

const ProductsView = () => {
  window.top.document.title='Products | Fixxo.'

  const productContext = useContext(ProductContext)

  return (
    <>
      <MainMenu className="bg-white" />
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Products" />
      <FeaturedProducts className='product-browsing mt-0' title="Products" items={productContext}/>
      <Footer />
    </>
  )
}

export default ProductsView