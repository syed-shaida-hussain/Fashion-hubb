import "./App.css";
import { LandingPage } from "./pages";
import {Routes , Route} from "react-router-dom"
import { CategoryMen } from "./pages/category-men/CategoryMen";
import { CategoryWomen } from "./pages/category-women/CategoryWomen"

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path = "/home" element = {<LandingPage/>} /> 
        <Route path = "/men" element = {<CategoryMen/>} />
        <Route path = "/women" element={<CategoryWomen/>} />
      </Routes>
    </div>
  );
}

export default App;
