import {createContext , useContext , useState} from "react"

const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
  
    const [wishItems , setWishItems] = useState([])
    const [wishCount , setWishCount] = useState(0)
    return ( <WishlistContext.Provider value = {{wishItems,setWishItems, wishCount, setWishCount }}>
        {children}
    </WishlistContext.Provider>
    )}

const useWishlist = () => useContext(WishlistContext)

export {useWishlist , WishlistProvider}