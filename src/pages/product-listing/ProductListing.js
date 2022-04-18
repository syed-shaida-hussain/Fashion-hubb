import "./ProductListing.css"
import { useEffect } from "react"
import { useProduct } from "../../contexts/product-context/product-context"
import axios from "axios"
import { useCart } from "../../contexts/cart-context/cart-context"
import {Header} from "../../components/Header"
import { useFilters } from "../../contexts/filter-context/filter-context"
import {getFilteredData} from "../../utils/filter-data"
import {getSortedData} from "../../utils/sort-data"
import {Filters} from "../../components/Filters"

const ProductListing = ()=> {

  const { setProductList, productList } = useProduct()
  const { setCartItems , cartItems , setCartCount } = useCart()
  const {sortBy , rateBy , showFastDeliveryOnly , showCodOnly , dispatch } = useFilters()

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProductList(response.data.products);
    });
  }, []);

    function addToCartHandler(product){
      if(cartItems.find(cartItem => cartItem._id === product._id )){
        setCartItems(previousCartItems => previousCartItems.reduce((accum, currentItem) =>  currentItem._id === product._id ? [{...currentItem, quantity: currentItem.quantity + 1 }, ...accum] : [...accum, currentItem],[]));
        } else
          setCartItems(previousCartItems => [product, ...previousCartItems])
          setCartCount(prev => prev + 1)
    }

      function getAllFilteredData (sortedList , filteredList, {showCodOnly , showFastDeliveryOnly}) {
        return filteredList.filter(({cod}) => showCodOnly ? cod : true ).filter(({fastDelivery}) => showFastDeliveryOnly ? fastDelivery :true)
      }
    
      const sortedData = getSortedData(productList, sortBy);
      const filteredData = getFilteredData(productList , rateBy)
      const finalFilteredData = getAllFilteredData(sortedData, filteredData , {showCodOnly , showFastDeliveryOnly}  );
   
    return <div>
      
    <Header />
    
    <section className="page-container flex-page">

      <Filters />

        <main className="products">

            {finalFilteredData.map(product  => {
                 return (<div key = {product._id} className="wishlist-product-container">
                 <img className="product-img" src= {product.src.url} alt={product.src.alt} />
 
                 <i className="material-icons like-icon black"> favorite_border</i>
 
                 <div className="wishlist-product-info">
                     <p className="wishlist-info-text margin-top-bottom ">
                         {product.name}
                     </p>
                     <p className="price-text margin-top-bottom "> Rs <span class = "line-through">({product.originalPrice})</span> {product.discountedPrice}  </p> 
                     <p className = "margin-top-bottom">Rating : {product.rating}</p>
                     <p> {product.fastDelivery  ?  <p className="badge">Fast delivery</p> : <p className = "hide">.</p>}</p>
                 </div>
                 <button onClick={ () =>addToCartHandler(product) } className="add-to-cart-btn primary-bg">Add to cart</button>
             </div>)})}
        </main>
    </section>
    </div>
}

export {ProductListing}