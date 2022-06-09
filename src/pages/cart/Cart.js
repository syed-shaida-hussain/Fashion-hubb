import "./Cart.css";
import { Link } from "react-router-dom";
import { Header } from "../../components"
import { useServices } from "../../contexts/productContext/productContext";

const Cart = () => {
    const { serviceState : {cartItems , totalPrice , wishItems} , dispatchService } = useServices()

    function removeFromCartHandler(product){
        dispatchService({type : "DELETE_FROM_CART" , payload : product})
    }

    function moveToWishlistHandler(product){
        if(wishItems.find(item => item._id === product._id)) {
            dispatchService({type : "default"})
        } else {
            dispatchService({type : "ADD_TO_WISHLIST" , payload : product})
        }
    }

    function decrementCartQuantity (product) {
        if(product.quantity <= 1){
            dispatchService({type: "DELETE_FROM_CART" , payload : product})
        } else {
            dispatchService({type: "DECREMENT_CART" , payload : product})
        }
        
    }

    function incrementCartQuantity (product) {
        dispatchService({type : "INCREMENT_CART" , payload : product}) 
    }

    return  <div>

    <Header />

    {cartItems.length < 1 && <div className = "center ">
        <h2 className="margin-top-bottom">Your Shopping Cart is empty !</h2>
        <button  className="outline-btn"> <Link to ="/products" className="link"> Let's Bag it ! </Link></button>
    </div>}

    {cartItems.length > 0 && <div>
        <h1 class="heading-text center-text">My Cart({cartItems.length})</h1>

        <hr />

        <main class="product-main-container">
            {cartItems.map(product => <div class="product-container">
                <img class="product-img" src= {product.src.url} alt = {product.src.alt} />
                <div class="product-info-text">
                    <p class="info-text">{product.name}</p>
                    <p class="price-text">
                   Rs. {product.discountedPrice} <span class="original-price">{product.originalPrice}</span>
                  </p>
                  <p class="product-quantity">
                    Qty : <button class="cart-increment-btn" onClick={ () =>  decrementCartQuantity(product) }> - </button> { product.quantity }
                    <button class="cart-decrement-btn" onClick = { () => incrementCartQuantity(product)}> + </button>
                  </p>
                  <button class="remove-cart-btn" onClick={ () => removeFromCartHandler(product)}>Remove from cart</button>
                  <button class="add-to-wishlist-btn" onClick = {() => moveToWishlistHandler(product)}>Add to wishlist</button>
                </div>
               
              </div>)}
            <section class="price-details">
            <p class="margin-top-bottom">PRICE DETAILS</p>
            <hr />
            <div class="flex margin-top-bottom">
                <p>Price ({cartItems.length} items)</p>
                <p>Rs {totalPrice}</p>
            </div>

            <div class="flex margin-top-bottom">
                <p>Delivery charges</p>
                <p>+Rs 99</p>
            </div>
            <hr />
            <div class="flex margin-top-bottom  bold">
                <p>Total Amount</p>
                <p>Rs {totalPrice +99 }</p>
            </div>
            <hr />
            <div class="btn-container">
                <button class="place-order-btn">Place order</button>
            </div>

        </section>
        </main>
        </div>}

 
    </div>
}

export {Cart}