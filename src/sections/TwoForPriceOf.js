import React from 'react'
import SmallCard from '../components/SmallCard'
import LgCard from '../components/LgCard'

// How do I add diffrent id's to the cards?
const TwoForPriceOf = () => {
  return (
    <section className="two-for-price-of ">
    {/* grid 1 */}
    <div id="grid-justify-start">
        <div className="grid-holder" id="grid-holder-first">
            <div className="grid">
                <LgCard heading="2 FOR USD $29" id="lg-card-1"/>
                <SmallCard id="price-card-2" />
                <SmallCard id="price-card-3" />
                <SmallCard id="price-card-4"/>
                <SmallCard id="price-card-5"/>
            </div>
        </div>
    </div>
    {/* grid 2 */}
    <div id="grid-justify-end">
        <div className="grid-holder" id="grid-holder-second">
            <div className="grid">
                <SmallCard id="price-card-6" />
                <SmallCard id="price-card-7" />
                <SmallCard id="price-card-8" />
                <SmallCard id="price-card-9" />
                <LgCard heading="2 FOR USD $49" id="lg-card-2"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default TwoForPriceOf