import { 
    PriceSorter,
    ProductCard
} from "../index"
import {
    useProducts
} from "../../context/index"
import "./ProductsListContainerGrid.css"

function ProductsListContainerGrid()
{
    const { filteredProducts } = useProducts()

    return (
        <div className="products-container">
            <PriceSorter/>
            <hr></hr>

            <div className="products-grid">
                {
                    filteredProducts.products.items.map(itemDetails=>
                        <ProductCard key={itemDetails.id} itemDetails={itemDetails}/>    
                    )
                }
            </div>
        </div>
    )
}

export { ProductsListContainerGrid }