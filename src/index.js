import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import { FilterProvider , ServiceProvider } from "./contexts";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ServiceProvider>
    <BrowserRouter>
    <FilterProvider>
      <App />
    </FilterProvider>
    </BrowserRouter>
    </ServiceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
