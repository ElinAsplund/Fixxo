import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ExternalLinkIcon from '../components/ExternalLinkIcon'
// import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ProductOverview = () => {

    // ------------------------------------------------------------------------------
    // SETTING OF "GLOBAL VALUES":
    const [activeSizeS, setActiveSizeS] = useState(false)
    const [activeSizeM, setActiveSizeM] = useState(false)
    const [activeSizeL, setActiveSizeL] = useState(false)
    const [activeSizeXL, setActiveSizeXL] = useState(false)
    const [count, setCount] = useState(1)
    const params = useParams()
    const [productInfo, setProductInfo] = useState({})
    
    // ------------------------------------------------------------------------------
    // FETCHING DATA ABOUT A SPECIFIC PRODUCT: 
    useEffect(() => {
        const fetchProductInfo = async () => {
          const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${params.articleNumber}`)
          setProductInfo(await result.json())
        }
        fetchProductInfo()
    
    }, [])

    // ------------------------------------------------------------------------------
    // ON SUBMIT:
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // ------------------------------------------------------------------------------
    // TOGGLE OF SIZE BUTTONS:
    const toggleButtonS = () => {
        setActiveSizeS(!activeSizeS)
        setActiveSizeM(false)
        setActiveSizeL(false)
        setActiveSizeXL(false)
    }
    const toggleButtonM = () => {
        setActiveSizeS(false)
        setActiveSizeM(!activeSizeM)
        setActiveSizeL(false)
        setActiveSizeXL(false)
    }
    const toggleButtonL = () => {
        setActiveSizeS(false)
        setActiveSizeM(false)
        setActiveSizeL(!activeSizeL)
        setActiveSizeXL(false)
    }
    const toggleButtonXL = () => {
        setActiveSizeS(false)
        setActiveSizeM(false)
        setActiveSizeL(false)
        setActiveSizeXL(!activeSizeXL)
    }

    // ------------------------------------------------------------------------------
    // QTY BUTTONS:
    const decrementCount = () => {
        let prevCount = count

        if (prevCount < 2)
            prevCount = 1
        else
            prevCount -= 1

        setCount(prevCount)
    }
    const incrementCount = () => {
        let prevCount = count

        if (prevCount >= 10)
            prevCount = 10
        else
            prevCount += 1

        setCount(prevCount)
    }

    // ------------------------------------------------------------------------------

    return (
        <section className="product-overview">
            <div className="container">
                <div className="grid">
                    <div className="lg-placeholder-area"><img src={productInfo.imageName} className="lg-placeholder-area" /></div>
                    <div className="sm-placeholder-area"><img src={productInfo.imageName} className="lg-placeholder-area" /></div>
                    <div className="sm-placeholder-area"><img src={productInfo.imageName} className="lg-placeholder-area" /></div>
                    <div className="sm-placeholder-area"><img src={productInfo.imageName} className="lg-placeholder-area" /></div>
                    <div className="product-order-overview">
                        <h1>{productInfo.name}</h1>
                        <p className="small-print">SKU: 12345670 <span>BRAND: The Northland</span></p>
                        <div className="star-holder">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <h2>${productInfo.price}.00</h2>
                        <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<a href="#">read more</a>)</p>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-grid">
                                <label htmlFor="size" className="size">Size:</label>
                                <div className="size-button-holder btn-no-corners">
                                    <button className={`size-button me-2 ${activeSizeS ? "size-button-dark" : ""}`} onClick={toggleButtonS} data-testid="sSize">S</button>
                                    <button className={`size-button me-2 ${activeSizeM ? "size-button-dark" : ""}`} onClick={toggleButtonM} data-testid="mSize">M</button>
                                    <button className={`size-button me-2 ${activeSizeL ? "size-button-dark" : ""}`} onClick={toggleButtonL} data-testid="lSize">L</button>
                                    <button className={`size-button ${activeSizeXL ? "size-button-dark" : ""}`} onClick={toggleButtonXL} data-testid="xlSize">XL</button>
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
                                        <button className="btn-qty" id="decrement-btn" onClick={decrementCount}>-</button>
                                        <span className='input-qty' id="qty-value">{count}</span>
                                        <button className="btn-qty" id="increment-btn" onClick={incrementCount}>+</button>
                                    </div>
                                    <button type='submit' className="btn-bg-theme btn-add-to-cart">ADD TO CART</button>
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