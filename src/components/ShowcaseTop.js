import React from 'react'
import leftImg from '../assets/images/female-sitting-down.svg'
import rightImg from '../assets/images/male-sitting-down.svg'

const ShowcaseTop = () => {
  return (
    <section className="showcase-top gradient-grey">
    <div className="content-holder">
        <div className="img-holder"><img src={leftImg} alt="female sitting on a stool"/></div>
        <div className="text-holder">
            <h1>Sale&nbsp;Up<br/>To&nbsp;50%&nbsp;Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <button className="btn-bg-theme">SHOP NOW</button>
        </div>
        <div className="img-holder"><img src={rightImg} alt="male sitting down with elbow on his knee"/></div>
    </div>
</section>
  )
}

export default ShowcaseTop