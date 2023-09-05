import "./Nav.css";
function Nav() {
  return (
    <div className="navbar">
      <div className="title">
        <h2>E-Commerce Application</h2>
      </div>

      <div className="menu">
        <a href="">Home</a>
        <a href="">Profile</a>
        <a href="">Products</a>
        <a href="">Support</a>
      </div>
    </div>
  );
}

export default Nav;
