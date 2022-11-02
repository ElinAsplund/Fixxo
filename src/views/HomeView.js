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

// import React, { useContext } from 'react';
// import { ProductContext } from '../contexts/contexts'

const HomeView = () => {

  window.top.document.title='Fixxo.'

  // const productContext = useContext(ProductContext)

  return (
    <>
      <MainMenu className="gradient-grey" />
      <ShowcaseTop />
      <ShowcaseBottom />
      <FeaturedProducts className="featured-products" title="Featured Products" />
      {/* <FeaturedProducts className="featured-products" title="Featured Products" items={productContext.eighthProducts} /> */}
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