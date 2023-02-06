import "./ProductListing.css"
import { useEffect } from "react"
import axios from "axios"
import { useFilters } from "../../contexts"
import {getFilteredData , getSortedData} from "../../utils"
import {Filters , Header} from "../../components"
import { useServices } from "../../contexts/productContext/productContext"
import { useNavigate } from "react-router-dom"

const ProductListing = () => {

  const navigate = useNavigate();
  const { serviceState : {products , cartItems , wishItems} , dispatchService } = useServices()
  const {sortBy , rateBy , filterBy , showFastDeliveryOnly , showCodOnly , showCategoryMen ,showCategoryWomen } = useFilters()

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      dispatchService({type : "SET_PRODUCTS" , payload : response.data.products})
    });
  }, []);

      function getAllFilteredData (sortedList , filteredList, {showCodOnly , showFastDeliveryOnly , showCategoryMen }) {
        return filteredList.filter(({cod}) => showCodOnly ? cod : true ).filter(({fastDelivery}) => showFastDeliveryOnly ? fastDelivery :true).filter(({categoryMen}) => showCategoryMen ? categoryMen : true).filter(({categoryWomen}) => showCategoryWomen ? categoryWomen : true)
      }

      function getSingleProduct(product) {
        navigate(`/products/${product._id}`)
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
                 return (<div key = {product._id} className="wishlist-product-container" onClick={() => getSingleProduct(product)}>
                 <img className="product-img" src= {product.src.url} alt={product.src.alt} /> 
                 <div className="wishlist-product-info mt1">
                     <p className="wishlist-info-text  mt1">
                         {product.name}
                     </p>
                     <p className="price-text margin-top-bottom "> Rs <span class = "line-through">({product.originalPrice})</span> {product.discountedPrice}  </p> 
                     <p className = "margin-top-bottom">Rating : {product.rating}</p>
                     <p> {product.fastDelivery  ?  <p className="badge">Fast delivery</p> : <p className = "hide">.</p>}</p>
                 </div>
             </div>)})}
        </main>
    </section>

    </div>
}

export {ProductListing}