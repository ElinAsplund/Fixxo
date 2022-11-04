import React from 'react'
// import femaleSittingDown from '../assets/images/female-sitting-down.svg'
// import maleSitiingDown from '../assets/images/male-sitting-down.svg'

const ShowcaseTop = () => {
  return (
    <section className="showcase-top gradient-grey">
      <div className="content-holder">
          <div className="img-holder"><img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png' alt=""/></div>
          {/* <div className="img-holder"><img src={femaleSittingDown} alt="female sitting on a stool"/></div> */}
            <div className="text-holder">
                <h1>Sale&nbsp;Up<br/>To&nbsp;50%&nbsp;Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <button className="btn-bg-theme">SHOP NOW</button>
            </div>
          <div className="img-holder"><img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png' alt=""/></div>
          {/* <div className="img-holder"><img src={maleSitiingDown} alt="male sitting down with elbow on his knee"/></div> */}
      </div>
    </section>
  )
}

export default ShowcaseTop