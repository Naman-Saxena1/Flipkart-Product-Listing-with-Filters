import "./Sidebar.css"

function Sidebar()
{
    
    return (
        <div className="filters-sidebar">
            <div className="filter-header-container">
                <span className="filter-heading">Filters</span>
                <span className="clear-all-filter">CLEAR ALL</span>
            </div>

            <hr></hr>

            <div className="sizes-filter-container">
                <h1 className="filter-type-heading">SIZE</h1>
                <div className="sizes-options-container">
                    
                    <div className="checkbox-item">
                        <input
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="small-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
                        />
                        <label htmlFor="small-checkbox">Small</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="medium-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
                        />
                        <label htmlFor="medium-checkbox">Medium</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="large-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
                        />
                        <label htmlFor="large-checkbox">Large</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="extra-large-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
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
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="puma-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
                        />
                        <label htmlFor="puma-checkbox">Puma</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="allen-solly-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
                        />
                        <label htmlFor="allen-solly-checkbox">Allen Solly</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="adidas-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
                        />
                        <label htmlFor="adidas-checkbox">Adidas</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="wrogn-large-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
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
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="men-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
                        />
                        <label htmlFor="men-checkbox">Men</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="women-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
                        />
                        <label htmlFor="women-checkbox">Women</label>
                    </div>
                    <div className="checkbox-item">
                        <input
                            // onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
                            id="children-checkbox"
                            type="checkbox"
                            // checked={romanceCategoryCheckbox}
                        />
                        <label htmlFor="children-checkbox">Children</label>
                    </div>
                    
                </div>
            </div>


        </div>
    )
}

export { Sidebar }