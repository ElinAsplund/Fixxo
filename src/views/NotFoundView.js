import React from 'react'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'

const NotFoundView = () => {
  return (
  <>
    <MainMenu className="bg-white" />
    <div className='d-flex justify-content-center align-items-center' style={ { height: "500px" } }>
      <h1>404 - Page Not Found</h1>
    </div>
    <div style={ { position: "fixed", bottom: "0" } }>
      <Footer />
    </div>
  </>
  )
}

export default NotFoundView