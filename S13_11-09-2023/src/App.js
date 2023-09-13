import "./App.css";
import { useState } from "react";

import Nav from "./components/nav/Nav";
import Profileclass from "./classComponents/Profileclass";
import Profile from "./components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import User from "./components/users/User";
import Login from "./components/login/Login";
import Product from "./components/products/Product";
import Image from "./components/useEffect/Lifecyle/Image";
import Text from "./components/useEffect/Lifecyle/Text";
import A from "./components/ContextAPI/A";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Userclass from "./classComponents/Userclass";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(true);
  const [showimagecomponent, setShowImageComponent] = useState(false);

  return (
    <div className="App">
      {isLoggedin ? <Nav logout={setIsLoggedIn} /> : null}
      {/* <Profileclass />
      <Userclass />
      <Profileclass /> */}
      {/* <A /> */}
      <Routes>
        <Route
          path="/"
          element={isLoggedin ? <Home /> : <Login login={setIsLoggedIn} />}
        />

        <Route path="/profile" element={isLoggedin ? <Profile /> : <Login />} />
        <Route path="/users" element={<User />} />

        <Route
          path="/products"
          element={isLoggedin ? <Product /> : <Login />}
        />
        <Route
          path="/productdetails"
          element={isLoggedin ? <ProductDetails /> : <Login />}
        />
        <Route path="/cart" element={isLoggedin ? <Cart /> : <Login />} />
        <Route
          path="/lc"
          element={
            <div style={{ textAlign: "center" }}>
              {showimagecomponent ? <Image /> : <Text />}
              <br />
              <button
                onClick={() => {
                  setShowImageComponent(true);
                }}
              >
                Show Image
              </button>
              &nbsp;&nbsp;
              <button
                onClick={() => {
                  setShowImageComponent(false);
                }}
              >
                Show Text
              </button>
            </div>
          }
        />
        <Route path="/help" element={<h2>Help Component</h2>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
