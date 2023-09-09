import { useState } from "react";

function Image() {
  const [state, setState] = useState(
    "https://daviseford.com/blog/public/img/thumbnails/misc/react-logo.png"
  );
  return (
    <div>
      <h2>Image Component</h2>
      <button
        onClick={() => {
          setState(
            "https://daviseford.com/blog/public/img/thumbnails/misc/react-logo.png"
          );
        }}
      >
        React Image
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          setState(
            "https://th.bing.com/th/id/OIP.piK8b5rQNtCQzN4vN_oiAgHaH8?pid=ImgDet&rs=1"
          );
        }}
      >
        Angular Image
      </button>
      <br />
      <br />
      <img src={state} width="300" height="300" />
      <br />
      <br />
    </div>
  );
}

export default Image;
