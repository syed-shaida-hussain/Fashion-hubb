import "./Wishlist.css"
import productImg from "../../assets/images/product-image.svg"
import { useWishlist } from "../../contexts/wishlist-context/wishlist-context"
import { useCart } from "../../contexts/cart-context/cart-context";
import { Header } from "../../components/Header";

const Wishlist = () => {
    const {wishCount , wishItems , setWishItems , setWishCount} = useWishlist()
    const {cartItems , setCartItems , setCartCount} = useCart()

    function moveToCartHandler(product){
        if(cartItems.find(item => item._id === product._id)) {
            setCartItems(previousCartItems => previousCartItems.reduce((accum, currentItem) =>  currentItem._id === product._id ? [{...currentItem, quantity: currentItem.quantity + 1 }, ...accum] : [...accum, currentItem],[]));
            setCartCount(prev => prev + 1)
            setWishCount(prev => prev - 1 )
            setWishItems(wishItems.filter(item => item._id !== product._id))
        } else {
            setCartItems([...cartItems , product])
            setCartCount(prev => prev + product.quantity)
            setWishItems(wishItems.filter(item => item._id !== product._id))
            setWishCount(prev => prev - 1)
        }
    }
    
    return <div>
    <Header />
        
    <h1 class="heading-text center-text">My Wishlist({wishCount})</h1>

    <hr />

    <main class="wishlist-main-container">
        {wishItems.map (product => (<div key = {product._id} className="wishlist-product-container">
                 <img className="product-image" src= {product.src.url} alt={product.src.alt} />
 
                 <i className="material-icons like-icon " > favorite</i>
 
                 <div className="wishlist-product-info">
                     <p className="wishlist-info-text margin-top-bottom ">
                         {product.name}
                     </p>
                     <p className="price-text margin-top-bottom "> Rs <span class = "line-through"> {product.originalPrice}</span> {product.discountedPrice}  </p> 
                     <p className = "margin-top-bottom">Rating : {product.rating}</p>
                 </div>
                 <button onClick={ () => moveToCartHandler(product) } className="add-to-cart-btn primary-bg">Move to cart</button>
             </div>) )}
     
   </main>  
    </div>
}

export {Wishlist}