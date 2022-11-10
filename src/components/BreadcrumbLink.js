import React from 'react'
import { NavLink } from 'react-router-dom'

const BredcrumbLink = ({hideOrShow, pageBefore}) => {
  return (
    <li className={hideOrShow}>
      <NavLink to={`/${pageBefore.replace(/ /gi, "_").toLowerCase()}`} className="breadcrumb-link" end>
        {pageBefore}
      </NavLink>
    </li>
  )
}

export default BredcrumbLink