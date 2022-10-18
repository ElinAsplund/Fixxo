import React from 'react'
import Header from '../sections/Header';
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

const HomeView = () => {
  return (
    <>
      <Header />
      <ShowcaseTop />
      <ShowcaseBottom />
      <FeaturedProducts />
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