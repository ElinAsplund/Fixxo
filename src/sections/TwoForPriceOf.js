import SmallCard from '../components/SmallCard'
import LgCard from '../components/LgCard'

const TwoForPriceOf = ({productsThree, productsTwo}) => {

  return (
    <section className="two-for-price-of ">
        {/* grid 1 */}
        <div id="grid-justify-start">
            <div className="grid-holder" id="grid-holder-first">
                <div className="grid">
                    <LgCard heading="2 FOR USD $29" id="lg-card-1"/>
                    {
                        productsThree.map(product => <SmallCard item={product} key={product.id} />)
                    } 
                </div>
            </div>
        </div>
        {/* grid 2 */}
        <div id="grid-justify-end">
            <div className="grid-holder" id="grid-holder-second">
                <div className="grid">
                    {
                        productsTwo.map(productTwo => <SmallCard item={productTwo} key={productTwo.id} />)
                    } 
                    <LgCard heading="2 FOR USD $49" id="lg-card-2"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TwoForPriceOf