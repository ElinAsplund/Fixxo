import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'

const ProductsView = () => {
  return (
    <>
      <MainMenu className="bg-white" />
      <Breadcrumb currentPage="Product Signal" />
      <div>Products</div>
      <Footer />
    </>
  )
}

export default ProductsView