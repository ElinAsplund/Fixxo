import ShowcaseTop from '../sections/ShowcaseTop';
import ShowcaseBottom from '../sections/ShowcaseBottom';
import FeaturedProducts from '../sections/FeaturedProducts';
import TopPicks from '../sections/TopPicks';
import OurSpeciality from '../sections/OurSpeciality';
import TwoForPriceOf from '../sections/TwoForPriceOf';
import HighligtSale from '../sections/HighligtSale';
import ChosenCategories from '../sections/ChosenCategories';
import WebshopInfo from '../sections/WebshopInfo';
import Footer from '../sections/Footer';
import MainMenu from '../sections/MainMenu';

import React, { useContext } from 'react';
import { ProductContext } from '../contexts/contexts'

const HomeView = () => {

  window.top.document.title='Fixxo.'

  const productContext = useContext(ProductContext)

  const debug = () =>{
    console.log("---CLICK!---")
    console.log(productContext.allProducts)
    console.log(productContext.fourProducts)
    console.log(productContext.eighthProducts)
    console.log(productContext.nineProducts)
    
    for (let i=0 ; i<4 ; i++){
      productContext.fourProducts.push(productContext.allProducts[i])
    }
    for (let i=0 ; i<8 ; i++){
      productContext.eighthProducts.push(productContext.allProducts[i])
    }
    for (let i=0 ; i<9 ; i++){
      productContext.nineProducts.push(productContext.allProducts[i])
    }

    console.log("---ASSIGNING---")

    console.log(productContext.allProducts)
    console.log(productContext.fourProducts)
    console.log(productContext.eighthProducts)
    console.log(productContext.nineProducts)
  }

  return (
    <>
      <MainMenu className="gradient-grey" />
      <ShowcaseTop />
      <ShowcaseBottom />
      <div className='container d-flex justify-content-center align-items-center mb-4'><button className="btn-bg-theme" onClick={debug}>DEBUG</button></div>
      {/* <FeaturedProducts className="featured-products" title="Featured Products" /> */}
      <FeaturedProducts className="featured-products" title="Featured Products" items={productContext.eighthProducts} />
      <TopPicks />
      <OurSpeciality />
      <TwoForPriceOf />
      <HighligtSale />
      <ChosenCategories />
      <WebshopInfo />
      <Footer />
    </>
  )
}

export default HomeView