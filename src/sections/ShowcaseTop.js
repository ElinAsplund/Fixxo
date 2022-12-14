import React from 'react'
import { NavLink } from 'react-router-dom'

const ShowcaseTop = () => {
  return (
    <section className="showcase-top gradient-grey">
      <div className="content-holder">
        <div className="img-holder"><img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png' alt=""/></div>
          <div className="text-holder">
            <h1>Sale&nbsp;Up<br/>To&nbsp;50%&nbsp;Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <NavLink to={`/products`}end>
              <button className="btn-bg-theme">SHOP NOW</button>
            </NavLink>
          </div>
        <div className="img-holder"><img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png' alt=""/></div>
      </div>
    </section>
  )
}

export default ShowcaseTop