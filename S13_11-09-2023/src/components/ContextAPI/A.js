import { useState } from "react";
import B from "./B";
import myContext from "./Context";

function A() {
  const [state, setState] = useState("Raj");

  return (
    <div>
      <h2>A Component</h2>
      <button
        onClick={() => {
          setState("Kabir");
        }}
      >
        Send Data to D
      </button>
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
