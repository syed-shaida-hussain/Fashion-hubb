import {createContext , useContext , useState} from "react"

const ProductContext = createContext()

const ProductProvider = ({children}) => {
  
    const [cartItems , setCartItems] = useState([])
    const [cartCount , setCartCount] = useState(0)
    const [productList , setProductList] = useState([])
    return ( <ProductContext.Provider value = {{cartItems,setCartItems , productList , setProductList , cartCount, setCartCount }}>
        {children}
    </ProductContext.Provider>
    )}

const useProduct = () => useContext(ProductContext)

export {useProduct , ProductProvider}