import './App.min.css';
import Header from './components/Header';
import ShowcaseTop from './components/ShowcaseTop';
import ShowcaseBottom from './components/ShowcaseBottom';
import FeaturedProducts from './components/FeaturedProducts';
import TopPicks from './components/TopPicks';
import OurSpeciality from './components/OurSpeciality';
import TwoForPriceOf from './components/TwoForPriceOf';
import HighligtSale from './components/HighligtSale';
import ChosenCategories from './components/ChosenCategories';
import WebshopInfo from './components/WebshopInfo';
import Footer from './components/Footer';

function App() {
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
  );
}

export default App;
