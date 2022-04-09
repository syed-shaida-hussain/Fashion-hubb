import "./App.css";
import { LandingPage } from "./pages";
import {Routes , Route} from "react-router-dom"
import { CategoryMen } from "./pages/category-men/CategoryMen";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path = "/home" element = {<LandingPage/>} /> 
        <Route path = "/men" element = {<CategoryMen/>} />
      </Routes>
    </div>
  );
}

export default App;
