import "./Cart.css";
import { Link } from "react-router-dom";
import { useWishlist , useCart } from "../../contexts";
import { Header } from "../../components"

const Cart = () => {
    const {cartItems , setCartItems, cartCount , setCartCount} = useCart()
    const { wishItems , setWishItems , setWishCount} = useWishlist()

    function removeFromCartHandler(product){
        setCartItems(cartItems.filter(item => item._id !== product._id ))
        setCartCount(cartCount-product.quantity)
    }

    function moveToWishlistHandler(product){
        if(wishItems.find(item => item._id === product._id)) {
            setWishItems(previousWishItems => previousWishItems.reduce((accum, currentItem) =>  currentItem._id === product._id ? [{...currentItem, quantity: currentItem.quantity + 1 }, ...accum] : [...accum, currentItem],[]));
        } else {
            setWishItems([...wishItems , product])
            setWishCount(prev => prev + 1)
        }
    }

    function decrementCartQuantity (product) {
        if(product.quantity <= 1){
            setCartItems(cartItems.filter(item => item._id !== product._id ))
            setCartCount(prev => prev - 1)
        } else {
            setCartItems( [...cartItems] , product.quantity  = product.quantity - 1)
            setCartCount(prev => prev - 1 )
        }
    }

    function incrementCartQuantity (product) {
        setCartItems( [...cartItems] , product.quantity  = product.quantity + 1)
        setCartCount(prev => prev + 1 )
    }

    return  <div>

    <Header />

    {cartItems.length < 1 && <div className = "center ">
        <h2 className="margin-top-bottom">Your Shopping Cart is empty !</h2>
        <button  className="outline-btn"> <Link to ="/products" className="link"> Let's Bag it ! </Link></button>
    </div>}

    {cartItems.length > 0 && <div>
        <h1 class="heading-text center-text">My Cart({cartCount})</h1>

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
        </main>
        </div>}

 
    </div>
}

export {Cart}