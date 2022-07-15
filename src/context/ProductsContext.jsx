import { useReducer, useContext, createContext } from 'react'
import originalProducts  from "../data/productsData.json"

const ProductsContext = createContext()

let originalfilterOptionsObject = {
    size:["s","m","l","xl"],
    brand:["Puma","Adidas","Allen Solly","Wrogn"],
    gender:["men","women","children"],
    sortPrice:"default",
}

let filterOptionsObject = originalfilterOptionsObject

function filterProductsAsPerUserFilters(filterOptionsObject)
{
    let sizeFilteredProducts = {
        items: originalProducts.items.filter(product=>{
        
            for(let size of product.sizesAvailable)
            {
                if(filterOptionsObject.size.includes(size))
                {
                    return true
                }
            }
            return false    
        })
    }

    let sizeAndBrandsFilteredProducts = {
        items: sizeFilteredProducts.items.filter(product=>{
        
            if(filterOptionsObject.brand.includes(product.brand))
            {
                return true
            }
            return false
        })
    }

    let sizeBrandAndGenderFilteredProducts = {
        items: sizeAndBrandsFilteredProducts.items.filter(product=>{
        
            if(filterOptionsObject.gender.includes(product.gender))
            {
                return true
            }
            return false    
        })
    }

    let finalFilteredProductsList = {
        items: sizeBrandAndGenderFilteredProducts.items.sort((productOne,productTwo)=>{
            
            if(filterOptionsObject.sortPrice==="price-low-to-high")
            {
                return productOne.price-productTwo.price
            }
            else
            {
                if(filterOptionsObject.sortPrice==="price-high-to-low")
                {
                    return productTwo.price-productOne.price
                }
                else
                {
                    return productOne.id-productTwo.id
                }
            }
        })
    }

    return finalFilteredProductsList 
}

const productFilterer = (state,{type,payload}) =>
{
    let {products,filterOptionsObject} = state
    switch(type)
    {
        case "UPDATE_SIZE_FILTER": 
            {
                let index = filterOptionsObject.size.indexOf(payload)
                
                if(index!==-1)
                {
                    filterOptionsObject = {
                        ...filterOptionsObject, 
                        size: [
                            ...filterOptionsObject.size.slice(0,index),
                            ...filterOptionsObject.size.slice(index+1)
                        ]
                    }
                }
                else
                {
                    filterOptionsObject = {
                        ...filterOptionsObject, 
                        size: [
                            ...filterOptionsObject.size,
                            payload
                        ]
                    }
                }

                products = filterProductsAsPerUserFilters(filterOptionsObject)
                
                return {filterOptionsObject,products}
            }
        case "UPDATE_BRAND_FILTER":
            {
                let index = filterOptionsObject.brand.indexOf(payload)
                
                if(index!==-1)
                {
                    filterOptionsObject = {
                        ...filterOptionsObject, 
                        brand: [
                            ...filterOptionsObject.brand.slice(0,index),
                            ...filterOptionsObject.brand.slice(index+1)
                        ]
                    }
                }
                else
                {
                    filterOptionsObject = {
                        ...filterOptionsObject, 
                        brand: [
                            ...filterOptionsObject.brand,
                            payload
                        ]
                    }
                }

                products = filterProductsAsPerUserFilters(filterOptionsObject)
                
                return {filterOptionsObject,products}
            }
        case "UPDATE_GENDER_FILTER":
            {
                let index = filterOptionsObject.gender.indexOf(payload)
                
                if(index!==-1)
                {
                    filterOptionsObject = {
                        ...filterOptionsObject, 
                        gender: [
                            ...filterOptionsObject.gender.slice(0,index),
                            ...filterOptionsObject.gender.slice(index+1)
                        ]
                    }
                }
                else
                {
                    filterOptionsObject = {
                        ...filterOptionsObject, 
                        gender: [
                            ...filterOptionsObject.gender,
                            payload
                        ]
                    }
                }

                products = filterProductsAsPerUserFilters(filterOptionsObject)
                
                return {filterOptionsObject,products}
            }
        case "UPDATE_PRICE_SORT":
            {
                if(filterOptionsObject.sortPrice===payload)
                {
                    return state
                }
                else
                {
                    filterOptionsObject = {
                        ...filterOptionsObject, 
                        sortPrice: payload
                    }
                }

                products = filterProductsAsPerUserFilters(filterOptionsObject)
                
                return {filterOptionsObject,products}
            }
        case "CLEAR_ALL_FILTERS":
            {
                filterOptionsObject = {...JSON.parse(JSON.stringify(originalfilterOptionsObject))}

                products = filterProductsAsPerUserFilters(filterOptionsObject)
                
                return {filterOptionsObject,products}
            }
        default : return state
    }
}

const ProductsContextProvider = ({children}) => {
    const products = originalProducts
    const [filteredProducts, dispatchProductsFilter] = useReducer(productFilterer,{products,filterOptionsObject})
    
    return (
        <ProductsContext.Provider value={{filteredProducts, dispatchProductsFilter}}>
            {children}
        </ProductsContext.Provider>
    )
}

const useProducts = () => useContext(ProductsContext)

export { useProducts, ProductsContextProvider}