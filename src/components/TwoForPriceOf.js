import React from 'react'
import SmallCard from './SmallCard'
import LgCard1 from './LgCard1'
import LgCard2 from './LgCard2'

// How do I add diffrent id's to the cards?
const TwoForPriceOf = () => {
  return (
    <section className="two-for-price-of ">
    {/* grid 1 */}
    <div id="grid-justify-start">
        <div className="grid-holder" id="grid-holder-first">
            <div className="grid">
                <LgCard1 />
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
                <LgCard2 />
            </div>
        </div>
    </div>
</section>
  )
}

export default TwoForPriceOf