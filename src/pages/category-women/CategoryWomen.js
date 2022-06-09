import "../category-men/Category.css"
import {useEffect , useState } from "react"
import axios from "axios"
import {Filters , Header} from "../../components"
import {getFilteredData , getSortedData} from "../../utils"
import { useFilters, useServices  } from "../../contexts"

const CategoryWomen = () => {
    const [categoryWomenProducts , setCategoryWomenProducts ] = useState([])
    const {sortBy , rateBy , showFastDeliveryOnly , showCodOnly } = useFilters()
    const { serviceState : {  cartItems } , dispatchService } = useServices()
  
    useEffect(() => {
        axios.get("/api/products").then((response) => {
            const result = response.data.products
            setCategoryWomenProducts(result.filter(product => product.categoryWomen))
        })
      }, []);
      
      function addToCartHandler(product){
        if(cartItems.find(cartItem => cartItem._id === product._id )){
          dispatchService({type : "INCREMENT_CART" , payload : product})
          } else
            dispatchService({type : "ADD_TO_CART" , payload : product})
      }
  

      function getAllFilteredData (sortedList , filteredList, {showCodOnly , showFastDeliveryOnly}) {
        return filteredList.filter(({cod}) => showCodOnly ? cod : true ).filter(({fastDelivery}) => showFastDeliveryOnly ? fastDelivery :true)
      }
    
      const sortedData = getSortedData(categoryWomenProducts, sortBy);
      const filteredData = getFilteredData(categoryWomenProducts , rateBy)
      const finalFilteredData = getAllFilteredData(sortedData, filteredData , {showCodOnly , showFastDeliveryOnly}  );

    return (<div>
        <Header />

    <section className="page-container flex-page">
       <Filters />

        <main className="products">
                {finalFilteredData.map(product => <div className="wishlist-product-container">
                 <img className="product-img" src= {product.src.url} alt= {product.src.alt} />
 
                 <i className="material-icons like-icon black"> favorite_border</i>
 
                 <div className="wishlist-product-info">
                     <p className="wishlist-info-text margin-top-bottom ">
                         {product.name}
                     </p>
                     <p className="price-text margin-top-bottom "> Rs <span class = "line-through"> {product.originalPrice}</span> {product.discountedPrice}  </p> 
                     <p className = "margin-top-bottom">Rating : {product.rating}</p>
                     <p> {product.fastDelivery  ?  <p className="badge">Fast delivery</p> : <p className = "hide">.</p>}</p>
                 </div>
                 <button onClick={ () =>addToCartHandler(product) } className="add-to-cart-btn primary-bg">Add to cart</button>
             </div>)}
        </main>
    </section>
    

    </div>)
}

export { CategoryWomen }

