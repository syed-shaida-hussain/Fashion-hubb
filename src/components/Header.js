import { Link } from "react-router-dom";
import { useServices } from "../contexts/productContext/productContext";

const Header = () => {
    const { serviceState : { cartItems , wishItems } , dispatchService } = useServices()
    return  <header className="header-nav flex">
    <ul className="navigation navbar-left flex">
        <li><a className="nav-pill "><Link to = "/" className = "nav-pill">Home</Link></a></li>
        <li><a className="nav-pill "> <Link to="/products" className="nav-pill ">Products</Link></a></li>
    </ul>

    <input className="search-bar" type="text" placeholder="Search" />

    <ul className="navigation navbar-right flex">
        <li>
            <div className="badge-on-cart wishlist-icon">
                <a className="nav-pill"> <Link to= "/wishlist"><i className="material-icons"> favorite_border</i></Link> </a>
                <p className="icon-badge aligned-icon">{wishItems.length}</p>
            </div>   
        </li>

        {/* <li>
            <a href="/Authentication/login.html" className="nav-pill account-icon"><i className="material-icons"> account_circle</i></a>
        </li> */}

        <li>
            <div className="badge-on-cart cart-icon">
                <a className="nav-pill"> <Link to="/cart"><i className="material-icons"> add_shopping_cart</i></Link> </a>
                <p className="icon-badge aligned-icon">{cartItems.length}</p>
            </div>
            
        </li>

    </ul>
</header>
}

export {Header}