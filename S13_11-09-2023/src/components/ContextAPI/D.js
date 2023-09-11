import { useContext } from "react";
import myContext from "./Context";

function D() {
  const data = useContext(myContext);
  return (
    <div>
      <h2>D Component</h2>
      <p>D: {data}</p>
    </div>
  );
}

export default D;
