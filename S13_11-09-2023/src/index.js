import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductDContext from "./context/ProductDContext";
import AddToCartContext from "./context/AddtocartContext";

ReactDOM.render(
  <BrowserRouter>
    <AddToCartContext>
      <ProductDContext>
        <App />
      </ProductDContext>
    </AddToCartContext>
  </BrowserRouter>,
  document.getElementById("root")
);
