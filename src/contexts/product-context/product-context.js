import {createContext , useContext , useState} from "react"

const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const [productList , setProductList] = useState([])
    return ( <ProductContext.Provider value = {{ productList , setProductList }}>
        {children}
    </ProductContext.Provider>
    )}

const useProduct = () => useContext(ProductContext)

export {useProduct , ProductProvider}