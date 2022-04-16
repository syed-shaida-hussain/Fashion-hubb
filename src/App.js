import "./App.css";
import {ProductListing} from "./pages"
import {Cart} from "./pages"
import {Routes , Route} from "react-router-dom"
import { Wishlist } from "./pages/wishlist/Wishlist";
import { LandingPage } from "./pages";
import { CategoryMen } from "./pages/category-men/CategoryMen";
import { CategoryWomen } from "./pages/category-women/CategoryWomen"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/products" element = {<ProductListing />} />
        <Route path = "/cart" element = {<Cart/>} />
        <Route path = "/wishlist" element = {<Wishlist />} />
        <Route path = "/home" element = {<LandingPage/>} /> 
        <Route path = "/men" element = {<CategoryMen/>} />
        <Route path = "/women" element={<CategoryWomen/>} />
      </Routes>
    </div>
  );
}

export default App;
