import "./Profile.css";
import { useState } from "react";

function Profile() {
  const [style, setStyle] = useState({
    bgColor: "white",
    color: "black",
    title: "Check to Switch Dark Mode",
  });

  const [state, setState] = useState({
    name: "Rajiv Mehta",
    email: "Rajiv@gmail.com",
    gender: "male",
    image:
      "https://m.foolcdn.com/media/dubs/images/smiling_man_in_business_suit_at_laptop_GettyIma.original.jpg",
  });

  const changeTheme = (event) => {
    if (event.target.checked) {
      setStyle({
        bgColor: "black",
        color: "white",
        title: "Uncheck to Switch Light Mode",
      });
    } else {
      setStyle({
        bgColor: "white",
        color: "black",
        title: "Check to Switch Dark Mode",
      });
    }
  };

  const updateStateToSoniya = () => {
    setState({
      name: "Soniya Singh",
      email: "soniyasingh21@gmail.com",
      gender: "female",
      image:
        "https://th.bing.com/th/id/OIP.HwMgp4ZE_haHjGY8xX5RwAHaFS?pid=ImgDet&rs=1",
    });
  };

  const updateStateToRajiv = () => {
    setState({
      name: "Rajiv Mehta",
      email: "Rajiv@gmail.com",
      gender: "male",
      image:
        "https://m.foolcdn.com/media/dubs/images/smiling_man_in_business_suit_at_laptop_GettyIma.original.jpg",
    });
  };

  return (
    <div className="Profile">
      <div className="profileImage">
        <img src={state.image} width="100%" height="100%" alt="user" />
      </div>

      <div
        className="profileDetails"
        style={{ backgroundColor: style.bgColor, color: style.color }}
      >
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd> {state.name}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{state.email}</dd>
          <dt>
            <b>Gender</b>
          </dt>
          <dd>{state.gender}</dd>
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
        <button onClick={updateStateToRajiv}>Rajiv Mehta</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={updateStateToSoniya}>Soniya Jaiswal</button>
        <br />
        <br />
        <input type="checkbox" onClick={changeTheme} />
        {style.title}
      </div>
    </div>
  );
}

export default Profile;
