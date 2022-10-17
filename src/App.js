import './App.min.css';
import Header from './components/Header';
import ShowcaseTop from './components/ShowcaseTop';
import ShowcaseBottom from './components/ShowcaseBottom';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <ShowcaseTop />
      <ShowcaseBottom />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default App;
