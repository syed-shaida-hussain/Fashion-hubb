import "./Wishlist.css"
import productImg from "../../assets/images/product-image.svg"
import { useWishlist } from "../../contexts/wishlist-context/wishlist-context"

const Wishlist = () => {
    const {wishCount , wishItems , setWishItems , setWishCount} = useWishlist()
    const {cartItems , setCartItems , setCartCount} = useProduct()

    function moveToCartHandler(){
        setCartItems([...cartItems , product])
        setWishItems(cartItems.filter(item => item._id !== product._id))
        setWishCount(prev => prev - 1)
        setCartCount(prev => prev + 1)
    }
    
    return <div>
        <header class="header-nav flex">
        <ul class="navigation navbar-left flex">
            <li><a href="/index.html" class="nav-pill">Home</a></li>
            <li><a href="/Product-listing-page/products.html" class="nav-pill">Products</a></li>
        </ul>

        <input class="search-bar" type="text" placeholder="Search" />

        <ul class="navigation navbar-right flex">
            <li>
                <div class="badge-on-cart wishlist-icon">
                    <a href="/Wishlist/wishlist.html" class="nav-pill"><i class="material-icons"> favorite_border</i></a>
                    <p class="icon-badge aligned-icon">{wishCount}</p>
                </div>   
            </li>

            <li>
                <a href="/Authentication/login.html" class="nav-pill account-icon"><i class="material-icons"> account_circle</i></a>
            </li>

            <li>
                <div class="badge-on-cart cart-icon">
                    <a href="/Cart/cart.html" class="nav-pill"><i class="material-icons"> add_shopping_cart</i></a>
                    <p class="icon-badge aligned-icon">1</p>
                </div>
                
            </li>

        </ul>
    </header>

    <h1 class="heading-text center-text">My Wishlist({wishCount})</h1>

    <hr />

    <main class="wishlist-main-container">
        {wishItems.map (product => (<section class="wishlist-product-container">
        <img class="product-image" src={productImg} alt="product-image" />
    
        <i class="material-icons like-icon"> favorite</i>
    
        <div class="wishlist-product-info">
           <p class="wishlist-info-text margin-top-bottom font-size-small">
            {product.name}
           </p>
           <p class="price-text margin-top-bottom">{product.discountedPrice}</p>
        </div>
        <button class="add-to-cart-btn" onClick = { () => moveToCartHandler(product)}>Move to cart</button>
    </section>) )}
     
   </main>  
    </div>
}

export {Wishlist}