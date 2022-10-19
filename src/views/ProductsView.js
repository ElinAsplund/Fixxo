import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'

const ProductsView = () => {
  return (
    <>
      <MainMenu className="bg-white" />
      <CurrentOfferBanner />
      <Breadcrumb currentPage="Product Signal" />
      <Footer />
    </>
  )
}

export default ProductsView