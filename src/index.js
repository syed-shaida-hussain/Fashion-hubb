import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import { FilterProvider , ServiceProvider } from "./contexts";
import { ToastProvider } from "./contexts/toast-context/toast-context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ServiceProvider>
    <BrowserRouter>
    <FilterProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
    </FilterProvider>
    </BrowserRouter>
    </ServiceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
