import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./contexts/product-context/product-context";
import {BrowserRouter} from "react-router-dom"
import { WishlistProvider } from "./contexts/wishlist-context/wishlist-context"
import { CartProvider } from "./contexts/cart-context/cart-context"
import { FilterProvider } from "./contexts/filter-context/filter-context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <WishlistProvider>
    <ProductProvider>
      <FilterProvider>
     <App />
     </FilterProvider>
     </ProductProvider>
    </WishlistProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
