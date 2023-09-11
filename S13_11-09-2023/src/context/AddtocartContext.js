import { createContext } from "react";
import { useState } from "react";

export const addtocartcontext = createContext();

function AddToCartContext(props) {
  const [products, setProducts] = useState([]);
  return (
    <addtocartcontext.Provider value={{ products, setProducts }}>
      {props.children}
    </addtocartcontext.Provider>
  );
}

export default AddToCartContext;
