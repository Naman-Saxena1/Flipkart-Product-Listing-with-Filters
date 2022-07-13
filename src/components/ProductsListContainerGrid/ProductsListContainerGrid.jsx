import { 
    PriceSorter,
    ProductCard
} from "../index"
import products  from "../../data/productsData"
import "./ProductsListContainerGrid.css"

function ProductsListContainerGrid()
{
    return (
        <div className="products-container">
            <PriceSorter/>
            <hr></hr>

            <div className="products-grid">
                {
                    products.items.map(itemDetails=>
                        <ProductCard itemDetails={itemDetails}/>    
                    )
                }
            </div>
        </div>
    )
}

export { ProductsListContainerGrid }