import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ExternalLinkIcon from '../components/ExternalLinkIcon'

const ProductOverview = () => {
    const [activeSizeS, setActiveSizeS] = useState(false)
    const [activeSizeM, setActiveSizeM] = useState(false)
    const [activeSizeL, setActiveSizeL] = useState(false)
    const [activeSizeXL, setActiveSizeXL] = useState(false)

    const params = useParams()

    // To get rid of the _ and capitalize the first letter:
    // https://flexiple.com/javascript/javascript-capitalize-first-letter/#section2
    let activeProduct = params.productName
    activeProduct = activeProduct.replace(/_/gi, " ")
    
    let eachWord = activeProduct.split(" ")

    for (let i = 0; i < eachWord.length; i++) {
        eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].slice(1);
    }

    activeProduct = eachWord.join(" ");

    // console.log(activeProduct);

    const toggleButtonS = (e) =>{
        e.preventDefault()
        setActiveSizeS(!activeSizeS)
        setActiveSizeM(false)
        setActiveSizeL(false)
        setActiveSizeXL(false)
    }
    const toggleButtonM = (e) =>{
        e.preventDefault()
        setActiveSizeS(false)
        setActiveSizeM(!activeSizeM)
        setActiveSizeL(false)
        setActiveSizeXL(false)
    }
    const toggleButtonL = (e) =>{
        e.preventDefault()
        setActiveSizeS(false)
        setActiveSizeM(false)
        setActiveSizeL(!activeSizeL)
        setActiveSizeXL(false)
    }
    const toggleButtonXL = (e) =>{
        e.preventDefault()
        setActiveSizeS(false)
        setActiveSizeM(false)
        setActiveSizeL(false)
        setActiveSizeXL(!activeSizeXL)
    }


  return (
    <section className="product-overview">
        <div className="container">
            <div className="grid">
                <div className="lg-placeholder-area"></div>
                <div className="sm-placeholder-area"></div>
                <div className="sm-placeholder-area"></div>
                <div className="sm-placeholder-area"></div>
                <div className="product-order-overview">
                    <h1>{activeProduct}</h1>
                    <p className="small-print">SKU: 12345670 <span>BRAND: The Northland</span></p>
                    <div className="star-holder">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <h2>$35.00</h2>
                    <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<a href="#">read more</a>)</p>
                    <form>
                        {/* <form onSubmit="onSubmitProduct(event)"> */}
                        <div className="form-grid">
                            <label htmlFor="size" className="size">Size:</label>
                            <div className="size-button-holder btn-no-corners">
                                <button className={`size-button me-2 ${ activeSizeS ? "size-button-dark" : "" }`} onClick={toggleButtonS} id="sSize">S</button>
                                <button className={`size-button me-2 ${ activeSizeM ? "size-button-dark" : "" }`} onClick={toggleButtonM} id="mSize">M</button>
                                <button className={`size-button me-2 ${ activeSizeL ? "size-button-dark" : "" }`} onClick={toggleButtonL} id="lSize">L</button>
                                <button className={`size-button ${ activeSizeXL ? "size-button-dark" : "" }`} onClick={toggleButtonXL} id="xlSize">XL</button>
                                {/* <button className="size-button me-1" onClick="toggleSizeS(event)" id="sSize">S</button>
                                <button className="size-button me-1" onClick="toggleSizeM(event)" id="mSize">M</button>
                                <button className="size-button me-1" onClick="toggleSizeL(event)" id="lSize">L</button>
                                <button className="size-button" onClick="toggleSizeXL(event)" id="xlSize">XL</button> */}
                            </div>
                            <label htmlFor="color-select" className="color">Color:</label>
                                <select className="form-select" aria-label="color selector" id="color-select">
                                <option defaultValue>Choose an option</option>
                                <option value="black">Black</option>
                                <option value="white">White</option>
                                <option value="navy">Navy</option>
                                </select>
                            <label htmlFor="qty" className="qty">Qty:</label>
                            <div className="qty-holder btn-no-corners">
                                <div className="qty-selector">
                                    <button className="btn-qty" id="decrement-btn">-</button>
                                    <input className='input-qty' type="text" defaultValue="1" id="qty-value"/>
                                    <button className="btn-qty" id="increment-btn">+</button>
                                </div>
                                <button type='submit' className="btn-bg-theme btn-add-to-cart">ADD TO CART</button>
                                {/* <button className="btn-bg-theme btn-add-to-cart" type="submit" onClick="klick()">ADD TO CART</button> */}
                            </div>
                        </div>
                    </form>
                    <div className="social-media">
                        <p>Share:</p>
                        <div className="social-media-holder">
                            <ExternalLinkIcon link="https://www.facebook.com" icon="fa-brands fa-facebook-f" />
                            <ExternalLinkIcon link="https://www.instagram.com" icon="fa-brands fa-instagram" />
                            <ExternalLinkIcon link="https://www.twitter.com" icon="fa-brands fa-twitter" />
                            <ExternalLinkIcon link="https://www.google.com" icon="fa-brands fa-google" />
                            <ExternalLinkIcon link="https://www.linkedin.com" icon="fa-brands fa-linkedin" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductOverview