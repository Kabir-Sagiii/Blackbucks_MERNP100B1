import { createContext } from "react";
import { useState } from "react";

export const pdcontext = createContext();

function ProductDContext(props) {
  const [productdetails, setProductDetails] = useState([]);
  return (
    <pdcontext.Provider value={{ productdetails, setProductDetails }}>
      {props.children}
    </pdcontext.Provider>
  );
}

export default ProductDContext;
