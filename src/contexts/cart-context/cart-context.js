import {createContext , useContext , useState} from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartItems , setCartItems] = useState([])
    const [cartCount , setCartCount] = useState(0)
    return (
        <CartContext.Provider value = {{cartItems,setCartItems , cartCount, setCartCount }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {CartProvider , useCart}