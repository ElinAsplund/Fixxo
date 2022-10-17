import React from 'react'
import magnifyingGlass from '../assets/images/icons/magnifying-glass.svg'
import compareArrows from '../assets/images/icons/compare-arrows.svg'
import heart from '../assets/images/icons/heart.svg'
import shoppingBag from '../assets/images/icons/shopping-bag.svg'


const NavIcons = () => {
  return (
    <div className="nav-icons">
        <a href="#">
            <div className="circle">
                <img src={magnifyingGlass} alt="magnifying glass"/>
            </div>
        </a>
        <a href="#">
            <div className="circle">
                <img src={compareArrows} alt="comparing arrows"/>
            </div>
        </a>
        <a href="#">
            <div className="circle">
                <div className="badge rounded-pill">1</div>  
                <img src={heart} alt="heart"/>
            </div>
        </a>
        <a href="#">
            <div className="circle">
                <div className="badge rounded-pill">3</div>
                <img src={shoppingBag} alt="shopping bag"/>
            </div>
        </a>
    </div>
  )
}

export default NavIcons