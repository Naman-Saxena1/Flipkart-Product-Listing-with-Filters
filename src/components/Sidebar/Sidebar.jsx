import { useProducts } from "../../context/index"
import "./Sidebar.css"

function Sidebar()
{
    const { filteredProducts, dispatchProductsFilter } = useProducts()
    const { filterOptionsObject } = filteredProducts
    let {
        size,
        brand,
        gender
    } = filterOptionsObject

    function updateSizesFilter(size)
    {
        dispatchProductsFilter({type:"UPDATE_SIZE_FILTER",payload:size})
    }

    function updateBrandsFilter(brand)
    {
        dispatchProductsFilter({type:"UPDATE_BRAND_FILTER",payload:brand})
    }

    function updateGendersFilter(gender)
    {
        dispatchProductsFilter({type:"UPDATE_GENDER_FILTER",payload:gender})
    }

    function clearAllFilters()
    {
        dispatchProductsFilter({type:"CLEAR_ALL_FILTERS",payload:null})
    }

    return (
        <div className="filters-sidebar">
            <div className="filter-header-container">
                <span className="filter-heading">Filters</span>
                <span 
                    onClick={()=>{clearAllFilters()}}
                    className="clear-all-filter"
                >
                    CLEAR ALL
                </span>
            </div>

            <hr></hr>

            <div className="sizes-filter-container">
                <h1 className="filter-type-heading">SIZE</h1>
                <div className="sizes-options-container">
                    
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateSizesFilter("s")}}
                            id="small-checkbox"
                            type="checkbox"
                            checked={size.length>0 && size.includes("s")? true : false}
                        />
                        <label htmlFor="small-checkbox">Small</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateSizesFilter("m")}}
                            id="medium-checkbox"
                            type="checkbox"
                            checked={size.length>0 && size.includes("m")? true : false}
                        />
                        <label htmlFor="medium-checkbox">Medium</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateSizesFilter("l")}}
                            id="large-checkbox"
                            type="checkbox"
                            checked={size.length>0 && size.includes("l")? true : false}
                        />
                        <label htmlFor="large-checkbox">Large</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateSizesFilter("xl")}}
                            id="extra-large-checkbox"
                            type="checkbox"
                            checked={size.length>0 && size.includes("xl")? true : false}
                        />
                        <label htmlFor="extra-large-checkbox">Extra Large</label>
                    </div>
                    
                </div>
            </div>
            
            <div className="brand-filter-container">
                <h1 className="filter-type-heading">BRAND</h1>
                <div className="brands-options-container">
                    
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateBrandsFilter("Puma")}}
                            id="puma-checkbox"
                            type="checkbox"
                            checked={brand.length>0 && brand.includes("Puma")? true : false}
                        />
                        <label htmlFor="puma-checkbox">Puma</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateBrandsFilter("Allen Solly")}}
                            id="allen-solly-checkbox"
                            type="checkbox"
                            checked={brand.length>0 && brand.includes("Allen Solly")? true : false}
                        />
                        <label htmlFor="allen-solly-checkbox">Allen Solly</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateBrandsFilter("Adidas")}}
                            id="adidas-checkbox"
                            type="checkbox"
                            checked={brand.length>0 && brand.includes("Adidas")? true : false}
                        />
                        <label htmlFor="adidas-checkbox">Adidas</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateBrandsFilter("Wrogn")}}
                            id="wrogn-large-checkbox"
                            type="checkbox"
                            checked={brand.length>0 && brand.includes("Wrogn")? true : false}
                        />
                        <label htmlFor="wrogn-large-checkbox">Wrogn</label>
                    </div>
                    
                </div>
            </div>
            
            <div className="gender-filter-container">
                <h1 className="filter-type-heading">Gender</h1>
                <div className="gender-options-container">
                    
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateGendersFilter("men")}}
                            id="men-checkbox"
                            type="checkbox"
                            checked={gender.length>0 && gender.includes("men")? true : false}
                        />
                        <label htmlFor="men-checkbox">Men</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateGendersFilter("women")}}
                            id="women-checkbox"
                            type="checkbox"
                            checked={gender.length>0 && gender.includes("women")? true : false}
                        />
                        <label htmlFor="women-checkbox">Women</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            onChange={() => {updateGendersFilter("children")}}
                            id="children-checkbox"
                            type="checkbox"
                            checked={gender.length>0 && gender.includes("children")? true : false}
                        />
                        <label htmlFor="children-checkbox">Children</label>
                    </div>
                    
                </div>
            </div>


        </div>
    )
}

export { Sidebar }