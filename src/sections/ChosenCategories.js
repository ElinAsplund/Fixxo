import React from 'react'
import MiniCard from '../components/MiniCard'

// How do I add diffrent id's to the cards?
const ChosenCategories = () => {
  return (
    <section className="chosen-categories ">
        <div className="container">
            <div className="grid">
                <h3 className="first-coloumn">Latest Products</h3>
                <h3 className="middle-coloumn">Best Selling Products</h3>
                <h3 className="last-coloumn">Top Reacted Products</h3>
                <MiniCard classNames="mini-card first-coloumn" />
                <MiniCard classNames="mini-card middle-coloumn" />
                <MiniCard classNames="mini-card last-coloumn" />
                <MiniCard classNames="mini-card first-coloumn" />
                <MiniCard classNames="mini-card middle-coloumn" />
                <MiniCard classNames="mini-card last-coloumn" />
                <MiniCard classNames="mini-card first-coloumn hide-xsm" />
                <MiniCard classNames="mini-card middle-coloumn hide-xsm" />
                <MiniCard classNames="mini-card last-coloumn" />
            </div>
        </div>
    </section>
  )
}

export default ChosenCategories