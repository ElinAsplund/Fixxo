import React from 'react'
import femaleUpclose from '../assets/images/female-upclose.svg'
import maleUpclose from '../assets/images/male-upclose.svg'

const TopPicks = () => {
  return (
    <section class="top-picks ">
        <div class="content-holder">
            <div class="img-holder bg-dark-brown">
                <img src={femaleUpclose} alt="female face upclose" id="top-pick-img-left"/>
                <div class="text-holder" id="text-holder-left">
                    <h1>Pamela Reif's<br/>Top Picks</h1>
                    <button class="btn-bg-dark">SHOP NOW</button>
                </div>
            </div>
            <div class="img-holder bg-consious-grey">
                <img src={maleUpclose} alt="male face upclose" id="top-pick-img-right"/>
                <div class="text-holder" id="text-holder-right">
                    <h1>Let's Be<br/>Conscious</h1>
                    <button class="btn-bg-white">SHOP NOW</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopPicks