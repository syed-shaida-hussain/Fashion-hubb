import "./App.css";
import {ProductListing} from "./pages"
import {Cart} from "./pages"
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/products" element = {<ProductListing />} />
        <Route path = "/cart" element = {<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
