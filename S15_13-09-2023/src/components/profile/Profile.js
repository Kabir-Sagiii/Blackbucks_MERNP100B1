import { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <img
          src="https://www.carvermostardi.com/cmos/wp-content/uploads/2018/05/professional_headshots_tampa_011.jpg"
          width="100%"
          height="200"
        />
        <h2>Sneha Reddy</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          sit aliquam dolore id ea? Numquam magni modi quasi dolorum, at rerum
        </p>
        <button>Profile Details</button>
      </div>
    );
  }
}

export default Profile;
