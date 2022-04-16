import "./App.css";
import {ProductListing} from "./pages"
import {Cart} from "./pages"
import {Routes , Route} from "react-router-dom"
import { Wishlist } from "./pages/wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/products" element = {<ProductListing />} />
        <Route path = "/cart" element = {<Cart/>} />
        <Route path = "/wishlist" element = {<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
