import React from 'react'
import SmallCard from '../components/SmallCard'
import LgCard1 from '../components/LgCard1'
import LgCard2 from '../components/LgCard2'

// How do I add diffrent id's to the cards?
const TwoForPriceOf = () => {
  return (
    <section className="two-for-price-of ">
    {/* grid 1 */}
    <div id="grid-justify-start">
        <div className="grid-holder" id="grid-holder-first">
            <div className="grid">
                <LgCard1 heading="2 FOR USD $29" />
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
        </div>
    </div>
    {/* grid 2 */}
    <div id="grid-justify-end">
        <div className="grid-holder" id="grid-holder-second">
            <div className="grid">
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <LgCard2 heading="2 FOR USD $49"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default TwoForPriceOf