import "./App.css";

import Nav from "./components/nav/Nav";

import Profile from "./components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import User from "./components/users/User";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<User />} />
        <Route path="/products" element={<h2>PRoduct Component</h2>} />
        <Route path="/help" element={<h2>Help Component</h2>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
