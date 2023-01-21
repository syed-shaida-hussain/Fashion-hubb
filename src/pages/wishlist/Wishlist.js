import "./Wishlist.css"
import { Link } from "react-router-dom";
import { Header } from "../../components";
import { useServices } from "../../contexts/productContext/productContext";
import { useToast } from "../../contexts/toast-context/toast-context";
import { Toast } from "../../components/Toast";

const Wishlist = () => {
   
     const { serviceState : {wishItems , cartItems} , dispatchService} = useServices();
     const {toastState : {isToastActive} , dispatchToast} = useToast()

    function moveToCartHandler(product){
        if(cartItems.find(item => item._id === product._id)) {
            dispatchService({type : "INCREMENT_CART" , payload : product})
            dispatchToast({type : "SHOW_TOAST" , payload : "Item Quantity updated successfully!"})
            setTimeout(() => {
              dispatchToast({type : "HIDE_TOAST" , payload : ""})
            },2000)
        } else  {
            dispatchService({type : "ADD_TO_CART" , payload : product})
            dispatchToast({type : "SHOW_TOAST" , payload : "Item Added to Cart successfully!"})
            setTimeout(() => {
              dispatchToast({type : "HIDE_TOAST" , payload : ""})
            },2000)
        }
    }

    function removeFromWishlistHandler(product) {
        dispatchService({type : "DELETE_FROM_WISHLIST" , payload : product})
        dispatchToast({type : "SHOW_TOAST" , payload : "Item Removed from Wishlist successfully!"})
        setTimeout(() => {
          dispatchToast({type : "HIDE_TOAST" , payload : ""})
        },2000)
    }
    
    return <div>
    <Header />

    
    {wishItems.length < 1 && <div className = "center ">
        <h2 className="margin-top-bottom">Your Wishlist is empty !</h2>
        <button  className="outline-btn"> <Link to ="/cart" className="link"> Add items from Cart </Link></button>
    </div>}

    {wishItems.length > 0 && <div>
        <h1 class="heading-text center-text">My Wishlist({wishItems.length})</h1>

    <hr />

    <main class="wishlist-main-container">
        {wishItems.map (product => (<div key = {product._id} className="wishlist-product-container">
                 <img className="product-img" src= {product.src.url} alt={product.src.alt} /> 
                 <div className="wishlist-product-info">
                     <p className="wishlist-info-text margin-top-bottom ">
                         {product.name}
                     </p>
                     <p className="price-text margin-top-bottom "> Rs <span class = "line-through"> {product.originalPrice}</span> {product.discountedPrice}  </p> 
                     <p className = "margin-top-bottom">Rating : {product.rating}</p>
                 </div>
                 <button onClick={ () => !isToastActive && moveToCartHandler(product) } className="button outline-btn wish-btn ">Move to cart</button>
                 <button onClick={ () => !isToastActive && removeFromWishlistHandler(product) } className="button outline-btn wish-btn ">Remove from Wishlist</button>
             </div>) )}
     
   </main>  
        </div>}
        
    { isToastActive && <Toast />}

    </div>
}

export {Wishlist}