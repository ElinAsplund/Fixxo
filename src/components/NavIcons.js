import React from 'react'

// This isn't in use
const NavIcons = () => {
  return (
    <div className="nav-icons">
        <a href="#">
            <div className="circle">
                <i className="fa-regular fa-magnifying-glass"></i>
            </div>
        </a>
        <a href="#">
            <div className="circle">
                <i className="fa-regular fa-code-compare fa-flip-horizontal"></i>
            </div>
        </a>
        <a href="#">
            <div className="circle">
                <div className="badge rounded-pill">1</div>  
                <i className="fa-regular fa-heart"></i>
            </div>
        </a>
        <a href="#">
            <div className="circle">
                <div className="badge rounded-pill">3</div>
                <i className="fa-regular fa-bag-shopping"></i>            
            </div>
        </a>
    </div>
  )
}

export default NavIcons