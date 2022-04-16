import "./App.css";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Routes , Route } from "react-router-dom"
import { LandingPage } from "./pages";
import { CategoryMen } from "./pages/category-men/CategoryMen";
import { CategoryWomen } from "./pages/category-women/CategoryWomen"

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path = "/wishlist" element = {<Wishlist />} />
        <Route path = "/home" element = {<LandingPage/>} /> 
        <Route path = "/men" element = {<CategoryMen/>} />
        <Route path = "/women" element={<CategoryWomen/>} />

      </Routes>
    </div>
  );
}

export default App;
