import "./App.css";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Routes , Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/wishlist" element = {<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
