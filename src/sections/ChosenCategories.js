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
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </div>
        </div>
    </section>
  )
}

export default ChosenCategories