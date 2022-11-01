import MiniCard from '../components/MiniCard'

const ChosenCategories = ({products}) => {



  return (
    <section className="chosen-categories ">
        <div className="container">
            <div className="grid">
                <h3 className="first-coloumn">Latest Products</h3>
                <h3 className="middle-coloumn">Best Selling Products</h3>
                <h3 className="last-coloumn">Top Reacted Products</h3>
                {
                  products.map(product => <MiniCard item={product} key={product.id} />)
                }
            </div>
        </div>
    </section>
  )
}

export default ChosenCategories