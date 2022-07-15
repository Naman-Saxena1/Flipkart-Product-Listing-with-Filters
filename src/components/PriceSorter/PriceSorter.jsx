import { useProducts } from "../../context/index"
import "./PriceSorter.css"

function PriceSorter()
{
    const { filteredProducts, dispatchProductsFilter } = useProducts()

    function sortProductsByPrice(sortType)
    {
        dispatchProductsFilter({type:"UPDATE_PRICE_SORT",payload:sortType})
    }

    return (
        <div className="sortby-price-container">
            <span 
                onClick={()=>{sortProductsByPrice("price-low-to-high")}}
                className="price-sort-option"
            >
                Price - Low to High
            </span>
            <span 
                onClick={()=>{sortProductsByPrice("price-high-to-low")}}
                className="price-sort-option"
            >
                Price - High to Low
            </span>
        </div>
    )
}

export { PriceSorter }