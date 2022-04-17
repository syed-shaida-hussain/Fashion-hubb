import "./Cart.css";
import { useProduct } from "../../contexts/product-context/product-context";
import {Header} from "../../components/Header"

const Cart = () => {
    const {cartItems , setCartItems, cartCount , setCartCount} = useProduct()

    function removeFromCertHandler(product){
        setCartItems(cartItems.filter(item => item._id !== product._id ))
        setCartCount(prev => prev -1)
    }

    function addToWishlistHandler(product){
      
    }

    return  <div>
       <Header />

    <h1 class="heading-text center-text">My Cart({cartCount})</h1>

    <hr />

    <main class="product-main-container">
    {cartItems.map(product => <div class="product-container">
                    <img class="product-image" src= {product.src.url} alt = {product.src.alt} />
                    <div class="product-info-text">
                        <p class="info-text">{product.name}</p>
                        <p class="price-text">
                       Rs. {product.discountedPrice} <span class="original-price">{product.originalPrice}</span>
                      </p>
                      <p class="product-quantity">
                        Quantity <button class="cart-increment-btn">-</button> 1
                        <button class="cart-decrement-btn">+</button>
                      </p>
                      <button class="remove-cart-btn" onClick={ () => removeFromCertHandler(product)}>Remove from cart</button>
                      <button class="add-to-wishlist-btn" onClick = {() => addToWishlistHandler}>Add to wishlist</button>
                    </div>
                  </div>)}
    </main>
    </div>
}

export {Cart}