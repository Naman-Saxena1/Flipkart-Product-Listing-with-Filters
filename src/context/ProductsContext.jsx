import { useEffect, useReducer, useContext, createContext} from 'react'

const ProductsContext = createContext()

let filterOptionsObject = {
    men                      : true,
    women                    : true,
    children                 : true,
    smallSize                : true,
    mediumSize               : true,
    largeSize                : true,
    extraLargeSize           : true,
    puma                     : true,
    allenSolley              : true,
    adidas                   : true,
    wrogn                    : true
}
