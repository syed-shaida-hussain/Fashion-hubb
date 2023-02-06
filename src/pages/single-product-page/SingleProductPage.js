import { useParams } from "react-router-dom";
import { Header } from "../../components";
import { Toast } from "../../components/Toast";
import { useServices } from "../../contexts"
import { useToast } from "../../contexts/toast-context/toast-context";
import "./SingleProduct.css"

const SingleProductPage = () => {

    const { serviceState : {products, cartItems , wishItems} , dispatchService } = useServices();
    const {toastState : {isToastActive} , dispatchToast} = useToast()
    const {productId} = useParams();
    const singleProduct = products.find((product => product._id === productId) )



    function addToCartHandler(product){
        if(cartItems.find(cartItem => cartItem._id === product._id )){
          dispatchService({type : "INCREMENT_CART" , payload : product})
          } else {
            dispatchService({type : "ADD_TO_CART" , payload : product})
          }
            dispatchToast({type : "SHOW_TOAST" , payload : "Item Added to Cart successfully!"})
            setTimeout(() => {
              dispatchToast({type : "HIDE_TOAST" , payload : ""})
            },2000)
      }
  
      function moveToWishlistHandler(product){
        if(wishItems.find(item => item._id === product._id)) {
            dispatchService({type : "default"})
        } else {
            dispatchService({type : "ADD_TO_WISHLIST" , payload : product})
            dispatchToast({type : "SHOW_TOAST" , payload : "Item Added to Wishlist successfully!"})
            setTimeout(() => {
              dispatchToast({type : "HIDE_TOAST" , payload : ""})
            },2000)
        }
    }

    function deleteFromWishlistHandler() {
      dispatchService({type : "DELETE_FROM_WISHLIST" , payload : singleProduct})
      dispatchToast({type : "SHOW_TOAST" , payload : "Item Removed from Wishlist successfully!"})
      setTimeout(() => {
        dispatchToast({type : "HIDE_TOAST" , payload : ""})
      },2000)
    }

    return <div>
        <Header/>
        <div className="single-product-container">
            <img className="single-product-img" src= {singleProduct.src.url} alt={singleProduct.src.alt} />
            <div className="product-description">
              <div className="wishlist-product-info">
                <h2>{singleProduct.brand}</h2>
                  <p className="wishlist-info-text">
                      {singleProduct.name}
                  </p>
                  <p className="price-text margin-top-bottom "> Rs <span class = "line-through">({singleProduct.originalPrice})</span> {singleProduct.discountedPrice}  </p> 
                  <p className = "margin-top-bottom">Rating : {singleProduct.rating}</p>
                  <button onClick={ () => !isToastActive && addToCartHandler(singleProduct) } className="add-to-cart-btn ">Add to cart</button>
                  <div className=" like-btn-container">
                  {wishItems.find((item) => item._id === singleProduct._id) ? <button className="button outline-btn like-btn " onClick = {() => deleteFromWishlistHandler(singleProduct)} >  Remove from wishlist</button> :  <button className="button outline-btn like-btn" onClick = {() => moveToWishlistHandler(singleProduct)}>Add to wishlist</button>}
                  </div>
              </div>
            </div>
        </div>
        { isToastActive && <Toast />}

    </div> 
}

export {SingleProductPage}