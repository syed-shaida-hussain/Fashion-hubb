import "./LandingPage.css"
import landingImg from "../../assets/images/ecommerce-landing-pic.svg"
import productImg from "../../assets/images/product-image.svg"

const LandingPage = () => {
    return <div>
         <header className="header-nav flex">
        <ul className="navigation navbar-left flex">
            <li><a href="/index.html" className="nav-pill active-link">Home</a></li>
            <li><a href="/Product-listing-page/products.html" className="nav-pill">Products</a></li>
        </ul>

        <input className="search-bar" type="text" placeholder="Search" />

        <ul className="navigation navbar-right flex">
            <li>
                <div className="badge-on-cart wishlist-icon">
                    <a href="/Wishlist/wishlist.html" className="nav-pill"><i className="material-icons"> favorite_border</i></a>
                    <p className="icon-badge aligned-icon">5</p>
                </div>   
            </li>

            <li>
                <a href="/Authentication/login.html" className="nav-pill account-icon"><i class="material-icons"> account_circle</i></a>
            </li>

            <li>
                <div className="badge-on-cart cart-icon">
                    <a href="/Cart/cart.html" className="nav-pill"><i className="material-icons"> add_shopping_cart</i></a>
                    <p className="icon-badge aligned-icon">1</p>
                </div>
                
            </li>

        </ul>
    </header>

    <main className="home-main">
        <div className="welcome-text">
            <p className="line-height">
                Hey there user! Welcome to 
                <span className="highlighted-text"> Fashion Hub</span> the complete
                clothing store. Explore all kinds of clothing stuff
                <a className="nav-pill" href="">here.</a>
            </p>
            <p className="line-height">
                Don't stop there! fill your cart to its fullest because that is the
                thing you can do for free. Don't miss out on free things.
            </p>
            <p className="line-height">
                Don't stop there either . Your wishlist is feeling lonely. Give it
                some company by wishlisting some products.
            </p>
            <p className="line-height">
                Try to avail all our offers and enjoy delivery at your door steps.
            </p>
            <p className="line-height">
                You are ready to go!
                <span className="highlighted-text">let's bag it.</span>
            </p>
        </div>

        <img className="landing-img responsive-img" src= {landingImg} alt="landing-pic" />

    </main>

    <footer className="suggestion-container flex">
        <div className="product-suggestion flex">
            <div className="product-image">
                <img className="product-suggestion-image" src={productImg} alt="" />
            </div>

            <div className="suggestion-text-container">
                <p className="suggestion-info line-height">Trending</p>
                <p className="suggestion-text">Summer collection</p>
                <p className="line-height">Explore wide range of trending stuff.</p>
            </div>
        </div>

        <div className="product-suggestion flex">
            <div className="product-image">
                <img className="product-suggestion-image" src={productImg} alt="" />
            </div>

            <div className="suggestion-text-container">
                <p className="suggestion-info line-height">New Arrivals</p>
                <p className="suggestion-text">Winter collection</p>
                <p className="line-height">Explore wide range of winter stuff here</p>
            </div>
        </div>
    </footer>
    </div>
}

export {LandingPage}