import React from "react";
import { useContext } from "react";
import { pdcontext } from "../context/ProductDContext";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { productdetails } = useContext(pdcontext);
  return (
    <div style={{ marginTop: "50px" }}>
      <h1 style={{ fontSize: "43px", color: "green", textAlign: "center" }}>
        {productdetails[0].category.toUpperCase()} {" CATEGORY"}
      </h1>
      {productdetails.length > 0 ? (
        <div
          style={{
            display: "flex",
            width: "1000px",
            margin: "auto",
            height: "300px",
          }}
        >
          <div style={{ width: "30%" }}>
            <img src={productdetails[0].image} width="100%" height="100%" />
          </div>
          <div style={{ width: "70%", padding: "0px 20px" }}>
            <dl>
              <dt>
                <b>Product Title</b>
              </dt>
              <dd>{productdetails[0].title}</dd>
              <dt>
                <b>Product Price</b>
              </dt>
              <dd>${productdetails[0].price}</dd>
              <dt>
                <b>Product Category</b>
              </dt>
              <dd>{productdetails[0].category}</dd>
              <dt>
                <b>Product Description</b>
              </dt>
              <dd>{productdetails[0].description}</dd>
              <dt>
                <b>Product Rating</b>
              </dt>
              <dd>{productdetails[0].rating.rate}</dd>
            </dl>
            <Link to="/products">
              {" "}
              <button>Back to Products Page</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>No Product Details</p>
      )}
    </div>
  );
}

export default ProductDetails;
