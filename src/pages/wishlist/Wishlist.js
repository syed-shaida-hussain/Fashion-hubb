import "./Wishlist.css"
import { Link } from "react-router-dom";
import { useWishlist , useCart  } from "../../contexts"
import { Header } from "../../components";

const Wishlist = () => {
    const {wishCount , wishItems , setWishItems , setWishCount} = useWishlist()
    const {cartItems , setCartItems , setCartCount} = useCart()

    function moveToCartHandler(product){
        if(cartItems.find(item => item._id === product._id)) {
            setCartItems(previousCartItems => previousCartItems.reduce((accum, currentItem) =>  currentItem._id === product._id ? [{...currentItem, quantity: currentItem.quantity + 1 }, ...accum] : [...accum, currentItem],[]));
            setCartCount(prev => prev + 1)
        } else  {
            setCartItems([...cartItems , product ])
            setCartCount(prev => prev + product.quantity)
        }
    }

    function removeFromWishlistHandler(product) {
        setWishCount(prev => prev - 1)
        setWishItems(wishItems.filter(item => item._id !== product._id))
    }
    
    return <div>
    <Header />

    
    {wishItems.length < 1 && <div className = "center ">
        <h2 className="margin-top-bottom">Your Wishlist is empty !</h2>
        <button  className="outline-btn"> <Link to ="/cart" className="link"> Add items from Cart </Link></button>
    </div>}

    {wishItems.length > 0 && <div>
        <h1 class="heading-text center-text">My Wishlist({wishCount})</h1>

    <hr />

    <main class="wishlist-main-container">
        {wishItems.map (product => (<div key = {product._id} className="wishlist-product-container">
                 <img className="product-img" src= {product.src.url} alt={product.src.alt} />
 
                 <i className="material-icons like-icon " > favorite</i>
 
                 <div className="wishlist-product-info">
                     <p className="wishlist-info-text margin-top-bottom ">
                         {product.name}
                     </p>
                     <p className="price-text margin-top-bottom "> Rs <span class = "line-through"> {product.originalPrice}</span> {product.discountedPrice}  </p> 
                     <p className = "margin-top-bottom">Rating : {product.rating}</p>
                 </div>
                 <button onClick={ () => moveToCartHandler(product) } className="add-to-cart-btn primary-bg">Move to cart</button>
                 <button onClick={ () => removeFromWishlistHandler(product) } className="add-to-cart-btn ">Remove from Wishlist</button>
             </div>) )}
     
   </main>  
        </div>}
        
    
    </div>
}

export {Wishlist}