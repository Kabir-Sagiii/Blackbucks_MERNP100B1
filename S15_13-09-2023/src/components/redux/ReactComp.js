import { useState } from "react";
import store from "./Store";

function ReactComp() {
  const [state, setState] = useState("");
  const sendData = () => {
    let action = {
      type: "NAME",
      payload: state,
    };
    store.dispatch(action);
  };
  return (
    <div>
      <h2>Redux Flow</h2>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={sendData}>Send Data to Redux</button>
    </div>
  );
}

export default ReactComp;
