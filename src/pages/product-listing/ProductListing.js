import "./ProductListing.css"
import { useEffect } from "react"
import axios from "axios"
import { useFilters } from "../../contexts"
import {getFilteredData , getSortedData} from "../../utils"
import {Filters , Header} from "../../components"
import { useServices } from "../../contexts/productContext/productContext"
import { Toast } from "../../components/Toast"
import { useToast } from "../../contexts/toast-context/toast-context"

const ProductListing = () => {

  const { serviceState : {products , cartItems , wishItems} , dispatchService } = useServices()
  const {sortBy , rateBy , filterBy , showFastDeliveryOnly , showCodOnly , showCategoryMen ,showCategoryWomen } = useFilters()
  const {toastState : {isToastActive} , dispatchToast} = useToast()

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      dispatchService({type : "SET_PRODUCTS" , payload : response.data.products})
    });
  }, []);

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

      function getAllFilteredData (sortedList , filteredList, {showCodOnly , showFastDeliveryOnly , showCategoryMen }) {
        return filteredList.filter(({cod}) => showCodOnly ? cod : true ).filter(({fastDelivery}) => showFastDeliveryOnly ? fastDelivery :true).filter(({categoryMen}) => showCategoryMen ? categoryMen : true).filter(({categoryWomen}) => showCategoryWomen ? categoryWomen : true)
      }
    
      const sortedData = getSortedData(products, sortBy);
      const filteredData = getFilteredData(products , filterBy , rateBy)
      const finalFilteredData = getAllFilteredData(sortedData, filteredData , {showCodOnly , showFastDeliveryOnly , showCategoryMen , showCategoryWomen} );
   
    return <div>
      
    <Header />
    
    <section className="page-container flex-page">

    <Filters />
        <main className="products">
            {finalFilteredData.map(product  => {
                 return (<div key = {product._id} className="wishlist-product-container">
                 <img className="product-img" src= {product.src.url} alt={product.src.alt} />
                 {wishItems.find((item) => item._id === product._id) ? <i className="material-icons like-icon " onClick = {() => dispatchService({type : "DELETE_FROM_WISHLIST" , payload : product})} > favorite</i> :  <i className="material-icons like-icon black" onClick = {() => moveToWishlistHandler(product)}> favorite_border</i>}
 
                 <div className="wishlist-product-info">
                     <p className="wishlist-info-text margin-top-bottom ">
                         {product.name}
                     </p>
                     <p className="price-text margin-top-bottom "> Rs <span class = "line-through">({product.originalPrice})</span> {product.discountedPrice}  </p> 
                     <p className = "margin-top-bottom">Rating : {product.rating}</p>
                     <p> {product.fastDelivery  ?  <p className="badge">Fast delivery</p> : <p className = "hide">.</p>}</p>
                 </div>
                 <button onClick={ () => !isToastActive && addToCartHandler(product) } className="add-to-cart-btn ">Add to cart</button>
             </div>)})}
        </main>
    </section>
    { isToastActive && <Toast />}

    </div>
}

export {ProductListing}