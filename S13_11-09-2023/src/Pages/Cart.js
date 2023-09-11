import { useContext } from "react";
import { addtocartcontext } from "../context/AddtocartContext";

function Cart() {
  const { products, setProducts } = useContext(addtocartcontext);

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <div
              style={{
                width: "1000px",
                margin: "30px auto",
                boxShadow: "0 0 10px black",
                padding: "10px",
              }}
            >
              <table width="100%">
                <tr>
                  <th>
                    <img src={product.image} width="80" height="80" />
                  </th>
                  <th>{product.title}</th>
                  <th>${product.price}</th>
                  <th>0</th>
                  <th>{product.category}</th>
                  <th>
                    <button
                      onClick={() => {
                        removeProduct(product.id);
                      }}
                    >
                      Remove
                    </button>
                  </th>
                </tr>
              </table>
            </div>
          );
        })
      ) : (
        <h2
          style={{
            textAlign: "center",
            marginTop: "50px",
            fontSize: "43px",
            color: "red",
          }}
        >
          No Products in the Cart
        </h2>
      )}
    </div>
  );
}

export default Cart;
