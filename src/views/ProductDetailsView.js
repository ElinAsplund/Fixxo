import { useParams } from 'react-router-dom'
import Breadcrumb from '../sections/Breadcrumb'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductInDepthInfo from '../sections/ProductInDepthInfo'
import ProductOverview from '../sections/ProductOverview'
import RelatedProducts from '../sections/RelatedProducts'

const ProductDetailsView = () => {
  
  const params = useParams()
  
  // To get rid of the _ and capitalize the first letter:
  // https://flexiple.com/javascript/javascript-capitalize-first-letter/#section2
  let activeProduct = params.productName
  activeProduct = activeProduct.replace(/_/gi, " ")
  
  let eachWord = activeProduct.split(" ")
  
  for (let i = 0; i < eachWord.length; i++) {
    eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].slice(1);
  }
  
  activeProduct = eachWord.join(" ");
  
  window.top.document.title = activeProduct +' | Fixxo.'

  return (
    <>
      <MainMenu className="bg-white" />
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-block" currentPage={activeProduct} />
      <CurrentOfferBanner />
      <ProductOverview />
      <ProductInDepthInfo />
      <RelatedProducts />
      <Footer />
    </>
  )
}

export default ProductDetailsView