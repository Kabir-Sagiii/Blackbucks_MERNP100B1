import "./App.css";
import { useState } from "react";

import Nav from "./components/nav/Nav";

import Profile from "./components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import User from "./components/users/User";
import Login from "./components/login/Login";
import Product from "./components/products/Product";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      {isLoggedin ? <Nav logout={setIsLoggedIn} /> : null}
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
        <Route path="/help" element={<h2>Help Component</h2>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
