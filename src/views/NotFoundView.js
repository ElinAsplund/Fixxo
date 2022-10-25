import React from 'react'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'

const NotFoundView = () => {
  window.top.document.title='404 | Fixxo.'

  return (
  <>
    <MainMenu className="bg-white" />
    <div className='d-flex justify-content-center align-items-center' style={ { height: "500px" , margin: "60px 0 0 0" } }>
      <h1>404 - Page Not Found</h1>
    </div>
    <div style={ { position: "fixed", bottom: "0" } }>
      <Footer />
    </div>
  </>
  )
}

export default NotFoundView