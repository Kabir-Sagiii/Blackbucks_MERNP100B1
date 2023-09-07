import "./ProductList.css";
function ProductList(props) {
  return (
    <div className="ProductList">
      <img src={props.image} width="70" height="70" />
      <h5>{props.name}</h5>
    </div>
  );
}

export default ProductList;
