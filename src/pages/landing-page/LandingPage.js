import "./LandingPage.css"
import landingImg from "../../assets/images/ecommerce-landing-pic.svg"
import productImg from "../../assets/images/product-image.svg"
import {Link} from "react-router-dom"

const LandingPage = () => {
 
    return <div>
        <header className="header-nav flex">
        <ul className="navigation navbar-left flex">
            <li><a className="nav-pill active-link">Home</a></li>
            <li><a className="nav-pill">Products</a></li>
        </ul>

        <input className="search-bar" type="text" placeholder="Search" />

        <ul className="navigation navbar-right flex">
            <li>
                <div className="badge-on-cart wishlist-icon">
                    <a className="nav-pill"><i className="material-icons"> favorite_border</i></a>
                    <p className="icon-badge aligned-icon">5</p>
                </div>   
            </li>

            <li>
                <a className="nav-pill account-icon"><i class="material-icons"> account_circle</i></a>
            </li>

            <li>
                <div className="badge-on-cart cart-icon">
                    <a className="nav-pill"><i className="material-icons"> add_shopping_cart</i></a>
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
                <span className="highlighted-text"> let's bag it.</span>
            </p>
            <button className="outline-btn">Explore</button>
        </div>

        <img className="landing-img responsive-img" src= {landingImg} alt="landing-pic" />

    </main>

    <footer className="suggestion-container flex">
    <Link className="sidebar-nav-link" to= "/men"> <div className="product-suggestion flex" > 
            <div className="product-image">
                <img className="product-suggestion-image" src={productImg} alt="" />
            </div>

            <div className="suggestion-text-container">
                <p className="suggestion-info line-height">Men's clothing</p>
                <p className="suggestion-text">Summer collection for Men</p>
                <p className="line-height">Explore wide range of trending stuff.</p>
            </div>
        </div>
        </Link>

      <Link className= "sidebar-nav-link" to = "/home"><div className="product-suggestion flex">
            <div className="product-image">
                <img className="product-suggestion-image" src={productImg} alt="" />
            </div>

            <div className="suggestion-text-container">
                <p className="suggestion-info line-height">Women's clothing</p>
                <p className="suggestion-text">Summer collection for Women</p>
                <p className="line-height">Explore wide range of clothing stuff.</p>
            </div>
        </div>
        </Link>  
    </footer>
    </div>
}

export {LandingPage}