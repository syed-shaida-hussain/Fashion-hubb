import "./ProductListing.css"
import productImg from "../../assets/images/product-image.svg"

const ProductListing = ()=> {
    return <div>
        <header className="header-nav flex">
        <ul className="navigation navbar-left flex">
            <li><a href="/index.html" className="nav-pill ">Home</a></li>
            <li><a href="/Product-listing-page/products.html" className="nav-pill active-link">Products</a></li>
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
                <a href="/Authentication/login.html" className="nav-pill account-icon"><i className="material-icons"> account_circle</i></a>
            </li>

            <li>
                <div className="badge-on-cart cart-icon">
                    <a href="/Cart/cart.html" className="nav-pill"><i className="material-icons"> add_shopping_cart</i></a>
                    <p className="icon-badge aligned-icon">1</p>
                </div>
                
            </li>

        </ul>
    </header>
    
    <section className="page-container flex-page">
        <aside className="filters">
            <div className="filter flex ">
                <p className="filter-heading margin-left margin-bottom margin-top">Filters</p>
                <a className="clear-link margin-right margin-bottom margin-top" href="#">Clear</a>
            </div>
            <div className="filter">
                <p className="price-text margin-bottom margin-left">Price</p>
                <div className="price-range margin-left">
                    <span className="margin-2-right">50</span>
                    <span className="margin-left">200</span>
                    <span className="margin-2-left">500</span>
                </div>
                <input className="range-input margin-bottom margin-left" type="range" />
            </div>
            <div className="filter">
                <p className="filter-heading-text margin-left">Category</p>
                <div className="flex">
                    <input className="margin-left margin-top margin-bottom" id="category-checkbox1" name="category-checkbox"
                        type="checkbox" />
                    <label className="input-label1 margin-bottom margin-top" for="category-checkbox1">
                        Men Clothing
                    </label>
                </div>
                <div className="flex">
                    <input className="margin-left margin-bottom" id="category-checkbox2" name="category-checkbox"
                        type="checkbox" />
                    <label className="input-label2 margin-right margin-bottom" for="category-checkbox2">Women
                        clothing</label>
                </div>
            </div>
            <p className="filter-heading-text margin-left">Rating</p>
            <div className="rating margin-top">
                <input id="rating1" className="margin-left" name="rating" type="radio" />
                <label for="rating1">4 stars and above</label>
            </div>
            <div className="rating">
                <input id="rating2" className="margin-left" name="rating" type="radio" />
                <label for="rating2">3 stars and above</label>
            </div>
            <div className="rating">
                <input id="rating3" className="margin-left" name="rating" type="radio" />
                <label for="rating3">2 stars and above</label>
            </div>
            <div className="rating">
                <input id="rating4" className="margin-left" name="rating" type="radio" />
                <label for="rating4">1 stars and above</label>
            </div>
            <p className="filter-heading-text margin-left">Sort by</p>
            <div className="rating">
                <input id="rating1" className="margin-left" name="rating" type="radio" />
                <label for="rating1">Price-Low to High</label>
            </div>
            <div className="rating">
                <input id="rating2" className="margin-left" name="rating" type="radio" />
                <label for="rating2">Price-High to Low</label>
            </div>
        </aside>
        <main className="products">
       
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image" />

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn primary-bg">Go to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image" />

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn">Add to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image" />

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn">Add to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image" />

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn primary-bg">Go to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image"/>

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn">Add to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image"/>

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn primary-bg">Go to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image"/>

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn primary-bg">Go to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image" />

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn ">Add to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image" />

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn">Add to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image" />

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn primary-bg">Go to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image" />

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn">Add to cart</button>
            </div>
            <div className="wishlist-product-container">
                <img className="product-image" src= {productImg} alt="product-image" />

                <i className="material-icons like-icon black"> favorite_border</i>

                <div className="wishlist-product-info">
                    <p className="wishlist-info-text margin-top-bottom font-size-small">
                        Men premium jacket
                    </p>
                    <p className="price-text margin-top-bottom">Rs 2000</p>
                </div>
                <button className="add-to-cart-btn primary-bg">Go to cart</button>
            </div>

        </main>
    </section>
    </div>
}

export {ProductListing}