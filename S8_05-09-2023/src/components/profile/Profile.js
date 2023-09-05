import "./Profile.css";
import { useState } from "react";

function Profile() {
  const [state, setState] = useState("Rajiv Mehta");

  return (
    <div className="Profile">
      <div className="profileImage">
        <img
          src="https://m.foolcdn.com/media/dubs/images/smiling_man_in_business_suit_at_laptop_GettyIma.original.jpg"
          width="100%"
          height="100%"
          alt="user"
        />
      </div>

      <div className="profileDetails">
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd> {state}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>RajivMehta@gmail.com</dd>
          <dt>
            <b>Gender</b>
          </dt>
          <dd>Male</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            fugit, ipsa tenetur voluptatibus cumque saepe qui fuga, itaque
            maxime nobis dicta provident ipsam! Corporis ut a qui nesciunt optio
            unde commodi! Ullam nostrum magnam eveniet consequatur quos ea,
            velit iste! maxime nobis dicta provident ipsam! Corporis ut a qui
            nesciunt optio unde commodi! Ullam nostrum magnam eveniet
            consequatur quos ea, velit iste!
          </dd>
        </dl>
        <button>Rajiv Mehta</button>&nbsp;&nbsp;&nbsp;
        <button>Soniya Jaiswal</button>
      </div>
    </div>
  );
}

export default Profile;
