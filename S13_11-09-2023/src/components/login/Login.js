import "./Login.css";
import { useRef } from "react";
function Login(props) {
  let ref1 = useRef(null); //ref1 = {current:null}
  let ref2 = useRef(null);

  const checkLogin = () => {
    var username = ref1.current.value;
    var password = ref2.current.value;
    if (username === "Kabir" && password === "Kabir@123") {
      props.login(true);
    } else {
      alert("Enter Proper Credentials");
    }

    ref1.current.value = "";
    ref2.current.value = "";
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        id="loginImg"
        src="https://static.javatpoint.com/company/images/blackbuck-company.png"
        width="800"
        height="100"
      />
      <div className="Login">
        <h2>Login Page</h2>
        <div>
          <input ref={ref1} type="text" placeholder="User Name" />
        </div>

        <div>
          <input ref={ref2} type="password" placeholder="Password" />
        </div>

        <div>
          <button onClick={checkLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
