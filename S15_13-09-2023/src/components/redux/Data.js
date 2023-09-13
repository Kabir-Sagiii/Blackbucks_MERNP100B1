import React from "react";
import { useSelector } from "react-redux";

function Data() {
  let data = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div>
      <h2>Store: {data}</h2>
    </div>
  );
}

export default Data;
