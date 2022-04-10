import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import { WishlistProvider } from "./contexts/wishlist-context/wishlist-context"

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <WishlistProvider>
     <App />
    </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
