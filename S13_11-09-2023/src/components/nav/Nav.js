import "./Nav.css";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <div className="navbar">
      <div className="title">
        <h2>E-Commerce Application</h2>
      </div>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
        {/* <Link to="/help">Support</Link> */}

        <Link to="/cart">Mycart</Link>
        <Link to="/">
          <button
            onClick={() => {
              props.logout(false);
            }}
          >
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
