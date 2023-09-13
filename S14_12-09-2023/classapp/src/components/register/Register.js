import { Component } from "react";
import "./Register.css";

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <h2>SignUp Form</h2>
        <div className="box">
          <input type="text" placeholder="User Name " />
        </div>
        <div className="box">
          <input type="password" placeholder="Password" />
        </div>
        <div className="box">
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="box">
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="male" />
          Female
        </div>
        <div className="box">
          <input type="phone" placeholder="Phone No" />
        </div>
        <div className="box">
          <select>
            <option>Select the City</option>
            <option>Hyderabad</option>
            <option>Banglore</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Pune</option>
          </select>
        </div>
        <div className="box">
          <input type="checkbox" />
          HTML
          <input type="checkbox" />
          CSS
          <input type="checkbox" />
          JS
          <input type="checkbox" />
          React
        </div>
        <div className="box">
          <textarea rows={5} cols={33} placeholder="Address"></textarea>
        </div>
        <button>Sign Up</button>
      </div>
    );
  }
}

export default Register;
