import "./App.css";
import { ProductListing , Cart, Wishlist , LandingPage , CategoryMen , CategoryWomen , SingleProductPage  } from "./pages"
import {Routes , Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/products" element = {<ProductListing />} />
        <Route path={`/products/:productId`} element = {<SingleProductPage
        /> } />
        <Route path = "/cart" element = {<Cart/>} />
        <Route path = "/wishlist" element = {<Wishlist />} />
        <Route path = "/" element = {<LandingPage/>} /> 
        <Route path = "/men" element = {<CategoryMen/>} />
        <Route path = "/women" element={<CategoryWomen/>} />
      </Routes>
    </div>
  );
}

export default App;
