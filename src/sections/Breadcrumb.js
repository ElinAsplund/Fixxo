import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ( {className, currentPage} ) => {
  return (
    <section className={className}>
        <div className="container">
            <NavLink to="/" className="home-icon" end>
                <i className="fa-sharp fa-solid fa-house"></i> Home
            </NavLink>
            <i className="fa-regular fa-chevron-right"></i>
            <h1>{currentPage}</h1>
        </div>
    </section>
  )
}

export default Breadcrumb