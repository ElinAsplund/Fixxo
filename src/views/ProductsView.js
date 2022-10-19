import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductInDepthInfo from '../sections/ProductInDepthInfo'
import ProductOverview from '../sections/ProductOverview'
import RelatedProducts from '../sections/RelatedProducts'

const ProductsView = () => {
  return (
    <>
      <MainMenu className="bg-white" />
      <CurrentOfferBanner />
      <Breadcrumb currentPage="Product Signal" />
      <ProductOverview />
      <ProductInDepthInfo />
      <RelatedProducts />
      <Footer />
    </>
  )
}

export default ProductsView