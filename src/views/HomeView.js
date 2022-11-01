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

const HomeView = ({items = []}) => {

  window.top.document.title='Fixxo.'

  return (
    <>
      <MainMenu className="gradient-grey" />
      <ShowcaseTop />
      <ShowcaseBottom />
      <FeaturedProducts className="featured-products" title="Featured Products" products={items} />
      <TopPicks />
      <OurSpeciality />
      <TwoForPriceOf products={items} />
      <HighligtSale />
      <ChosenCategories products={items} />
      <WebshopInfo />
      <Footer />
    </>
  )
}

export default HomeView