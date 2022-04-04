import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./contexts/product-context/product-context";
// import {FilterProvider} from "./contexts/filter-context/filter-context"
import {BrowserRouter} from "react-router-dom"


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ProductProvider>
    <App />
  </ProductProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
