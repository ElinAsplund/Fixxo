import React from 'react'
import { NavLink } from 'react-router-dom'

const CurrentOfferBanner = () => {
  return (
    <section className="current-offer-banner">
        <div className="container">
            <div className="heading-holder mt-4">
                <NavLink to="/currentoffer" className="current-offer-link">Get 25% OFF at the Fixxo Selection - Shop&nbsp;Now!</NavLink>
            </div>
        </div>
    </section>
  )
}

export default CurrentOfferBanner