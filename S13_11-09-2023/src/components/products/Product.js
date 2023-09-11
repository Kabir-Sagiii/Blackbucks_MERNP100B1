import "./Product.css";
import axios from "axios";
import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { pdcontext } from "../../context/ProductDContext";
import { addtocartcontext } from "../../context/AddtocartContext";

function Product() {
  const [state, setState] = useState([]);
  const [btndisable, setBtnDisable] = useState(false);
  const { setProductDetails } = useContext(pdcontext);
  const { setProducts, products } = useContext(addtocartcontext);
  let cartBtnRef = useRef(null);

  useEffect(function () {
    getAllData();
  }, []);

  const addToCart = (product) => {
    alert("Product Added to Cart");
    setProducts([...products, product]);
  };

  const getAllData = () => {
    axios.get("https://fakestoreapi.com/products").then((electronicdata) => {
      console.log(electronicdata.data);
      setState(electronicdata.data);
    });
  };
  const getElectronicsData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((electronicdata) => {
        console.log(electronicdata.data);
        setState(electronicdata.data);
      });
  };

  const getJeweleryData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((jewelerydata) => {
        setState(jewelerydata.data);
      });
  };
  const getMensData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing ")
      .then((mensdata) => {
        setState(mensdata.data);
      });
  };
  const getWomensData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((womensdata) => {
        setState(womensdata.data);
      });
  };
  return (
    <div className="Product">
      <div className="category">
        <div>
          <input
            type="radio"
            name="products"
            defaultChecked
            onChange={getAllData}
          />
          ALL
        </div>
        <div>
          <input type="radio" name="products" onChange={getElectronicsData} />
          Electronics
        </div>
        <div>
          <input type="radio" name="products" onChange={getJeweleryData} />
          Jewelery
        </div>
        <div>
          <input type="radio" name="products" onChange={getMensData} />
          MensClothing
        </div>
        <div>
          <input type="radio" name="products" onChange={getWomensData} />
          WomensClothing
        </div>
      </div>

      <div className="products">
        {state.length > 0 &&
          state.map((product) => {
            return (
              <div className="Card">
                <img
                  src={product.image}
                  width="100%"
                  height={200}
                  alt="product"
                />
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
                <Link to="/productdetails">
                  <button
                    onClick={() => {
                      setProductDetails([product]);
                    }}
                  >
                    Product Details
                  </button>
                </Link>
                &nbsp;&nbsp;
                <button
                  ref={cartBtnRef}
                  disabled={btndisable}
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Product;
