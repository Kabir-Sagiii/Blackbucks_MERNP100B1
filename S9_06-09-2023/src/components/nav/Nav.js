import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navbar">
      <div className="title">
        <h2>E-Commerce Application</h2>
      </div>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/products">Products</Link>
        <Link to="/help">Support</Link>
      </div>
    </div>
  );
}

export default Nav;
