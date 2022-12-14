import React from 'react'

const LgCard = ({heading, id}) => {
  return (
    <div className="two-for-holder" id={id}>
      <h2>{heading}</h2>
      <button className="btn-bg-white">FLASH SALE</button>
    </div>  
  )
}

export default LgCard