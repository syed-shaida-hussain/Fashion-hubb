import "./LandingPage.css"
import landingImg from "../../assets/images/ecommerce-landing-pic.svg"
import productImg from "../../assets/images/product-image.svg"

const LandingPage = () => {
    return <div>
         <header class="header-nav flex">
        <ul class="navigation navbar-left flex">
            <li><a href="/index.html" class="nav-pill active-link">Home</a></li>
            <li><a href="/Product-listing-page/products.html" class="nav-pill">Products</a></li>
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
                <div class="badge-on-cart cart-icon">
                    <a href="/Cart/cart.html" class="nav-pill"><i class="material-icons"> add_shopping_cart</i></a>
                    <p class="icon-badge aligned-icon">1</p>
                </div>
                
            </li>

        </ul>
    </header>

    <main class="home-main">
        <div class="welcome-text">
            <p class="line-height">
                Hey there user! Welcome to 
                <span class="highlighted-text"> Fashion Hub</span> the complete
                clothing store. Explore all kinds of clothing stuff
                <a class="nav-pill" href="">here.</a>
            </p>
            <p class="line-height">
                Don't stop there! fill your cart to its fullest because that is the
                thing you can do for free. Don't miss out on free things.
            </p>
            <p class="line-height">
                Don't stop there either . Your wishlist is feeling lonely. Give it
                some company by wishlisting some products.
            </p>
            <p class="line-height">
                Try to avail all our offers and enjoy delivery at your door steps.
            </p>
            <p class="line-height">
                You are ready to go!
                <span class="highlighted-text">let's bag it.</span>
            </p>
        </div>

        <img class="landing-img responsive-img" src= {landingImg} alt="landing-pic" />

    </main>

    <footer class="suggestion-container flex">
        <div class="product-suggestion flex">
            <div class="product-image">
                <img class="product-suggestion-image" src={productImg} alt="" />
            </div>

            <div class="suggestion-text-container">
                <p class="suggestion-info line-height">Trending</p>
                <p class="suggestion-text">Summer collection</p>
                <p class="line-height">Explore wide range of trending stuff.</p>
            </div>
        </div>

        <div class="product-suggestion flex">
            <div class="product-image">
                <img class="product-suggestion-image" src={productImg} alt="" />
            </div>

            <div class="suggestion-text-container">
                <p class="suggestion-info line-height">New Arrivals</p>
                <p class="suggestion-text">Winter collection</p>
                <p class="line-height">Explore wide range of winter stuff here</p>
            </div>
        </div>
    </footer>
    </div>
}

export {LandingPage}