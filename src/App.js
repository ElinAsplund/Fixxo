import './App.min.css';
import Header from './components/Header';
import ShowcaseTop from './components/ShowcaseTop';
import ShowcaseBottom from './components/ShowcaseBottom';
import FeaturedProducts from './components/FeaturedProducts';
import TopPicks from './components/TopPicks';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <ShowcaseTop />
      <ShowcaseBottom />
      <FeaturedProducts />
      <TopPicks />
      <Footer />
    </>
  );
}

export default App;
