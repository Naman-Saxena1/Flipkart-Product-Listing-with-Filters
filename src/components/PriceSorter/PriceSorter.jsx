import "./PriceSorter.css"

function PriceSorter()
{
    return (
        <div className="sortby-price-container">
            <span className="price-sort-option">Price - Low to High</span>
            <span className="price-sort-option">Price - High to Low</span>
        </div>
    )
}

export { PriceSorter }