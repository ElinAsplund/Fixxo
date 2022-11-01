import Breadcrumb from '../sections/Breadcrumb'
import FeaturedProducts from '../sections/FeaturedProducts'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'

const ProductsView = ({items = []}) => {

  window.top.document.title='Products | Fixxo.'

  return (
    <>
      <MainMenu className="bg-white" />
      <Breadcrumb className="breadcrumb" hideOrShowProducts="d-none" currentPage="Products" />
      <FeaturedProducts className='product-browsing mt-0' title="Products" products={items}/>
      <Footer />
    </>
  )
}

export default ProductsView