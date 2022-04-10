import "./Cart.css";
import productImg from "../../assets/images/product-image.svg"
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import { useProduct } from "../../contexts/product-context/product-context";
import { Link } from "react-router-dom";
>>>>>>> Stashed changes

const Cart = () => {
    const {cartItems , setCartItems, cartCount , setCartCount} = useProduct()

    function removeFromCertHandler(product){
        setCartItems(cartItems.filter(item => item._id !== product._id ))
        setCartCount(prev => prev -1)
    }

    function addToWishlistHandler(product){
      
    }

    return  <div>
        <header class="header-nav flex">
        <ul class="navigation navbar-left flex">
            <li><a href="/index.html" class="nav-pill">Home</a></li>
<<<<<<< Updated upstream
            <li><a href="/Product-listing-page/products.html" class="nav-pill">Products</a></li>
=======
import { useProduct } from "../../contexts/product-context/product-context";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cartItems , setCartItems, cartCount , setCartCount} = useProduct()

    function removeFromCertHandler(product){
        setCartItems(cartItems.filter(item => item._id !== product._id ))
        setCartCount(prev => prev -1)
    }

    function addToWishlistHandler(product){
      
    }

    return  <div>
        <header class="header-nav flex">
        <ul class="navigation navbar-left flex">
            <li><a href="/index.html" class="nav-pill">Home</a></li>
            <li><a className="nav-pill active-link"> <Link to="/products" className="nav-pill">Products</Link></a></li>
>>>>>>> Stashed changes
=======
            <li><a className="nav-pill active-link"> <Link to="/products" className="nav-pill">Products</Link></a></li>
>>>>>>> Stashed changes
        </ul>

        <input class="search-bar" type="text" placeholder="Search" />

        <ul class="navigation navbar-right flex">
            <li>
                <div class="badge-on-cart wishlist-icon">
                    <a href="/Wishlist/wishlist.html" class="nav-pill"><i class="material-icons"> favorite_border</i></a>
                    <p class="icon-badge aligned-icon">5</p>
                </div>   
            </li>

            <li>
                <a href="/Authentication/login.html" class="nav-pill account-icon"><i class="material-icons"> account_circle</i></a>
            </li>

            <li>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                <div class="badge-on-cart cart-icon">
                    <a href="/Cart/cart.html" class="nav-pill"><i class="material-icons"> add_shopping_cart</i></a>
                    <p class="icon-badge aligned-icon">1</p>
=======
            <div className="badge-on-cart cart-icon">
                    <a className="nav-pill"> <Link to="/cart"><i className="material-icons"> add_shopping_cart</i></Link> </a>
                    <p className="icon-badge aligned-icon">{cartCount}</p>
>>>>>>> Stashed changes
=======
            <div className="badge-on-cart cart-icon">
                    <a className="nav-pill"> <Link to="/cart"><i className="material-icons"> add_shopping_cart</i></Link> </a>
                    <p className="icon-badge aligned-icon">{cartCount}</p>
>>>>>>> Stashed changes
                </div>
                
            </li>

        </ul>
    </header>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <h1 class="heading-text center-text">My Cart(1)</h1>
=======
    <h1 class="heading-text center-text">My Cart({cartCount})</h1>
>>>>>>> Stashed changes
    <hr />

<<<<<<< Updated upstream
            <div class="flex margin-top-bottom">
                <p>Discount</p>
                <p>-Rs 1999</p>
            </div>

            <div class="flex margin-top-bottom">
                <p>Delivery charges</p>
                <p>+Rs 99</p>
            </div>
            <hr />
            <div class="flex margin-top-bottom  bold">
                <p>Total Amount</p>
                <p>-Rs 3099</p>
            </div>
            <hr />
            <p class="margin-top-bottom">You will save Rs 1999 on this order</p>

            <div class="btn-container">
                <button class="place-order-btn">Place order</button>
            </div>

        </section>
=======
    <h1 class="heading-text center-text">My Cart({cartCount})</h1>
    <hr />

=======
>>>>>>> Stashed changes
    <main class="product-main-container">
    {cartItems.map(product => <div class="product-container">
                    <img class="product-image" src= {productImg} />
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </main>
    </div>
}

export {Cart}