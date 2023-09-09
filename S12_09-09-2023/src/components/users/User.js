import "./User.css";
import axios from "axios";
import { useState } from "react";

function User() {
  const [state, setState] = useState([]);
  const [userdetails, setUserDetails] = useState([]);

  const NoFilter = () => {
    setState(userdetails);
  };

  const filterMale = () => {
    var maleDetails = userdetails.filter((user) => user.gender === "male");
    setState(maleDetails);
  };

  const filterFemale = () => {
    var femaleDetails = userdetails.filter((user) => user.gender === "female");
    setState(femaleDetails);
  };

  const getUsers = () => {
    var promiseObj = axios.get("https://randomuser.me/api/?results=10");
    promiseObj
      .then((successdata) => {
        console.log("successdata", successdata.data.results);
        setState(successdata.data.results);
        setUserDetails(successdata.data.results);
      })
      .catch((failuredata) => {
        console.log("failuredata", failuredata);
      });
  };
  return (
    <div className="User">
      <h2>User Details From RandomUser.me Website</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum
        ipsum quod deleniti quam dolore dignissimos veritatis illum non ipsam,
        aliquam recusandae error magni hic quos corporis! Deleniti hic ipsam
        officia, aperiam odit quis nobis ratione! Blanditiis tempora ratione
        adipisci animi provident reprehenderit omnis nulla, suscipit ullam
        distinctio temporibus magni rerum in numquam fuga cumque eveniet
        voluptatum aliquam repellat officia aliquid, quaerat quam. Eligendi,
        similique. Nam eum minus unde dolores et, tempore ab error minima porro
        quae. Deserunt laudantium iure cumque. Harum tenetur, ut reiciendis ab
        laborum voluptatibus quibusdam aperiam enim libero soluta nesciunt quia
        quo officia inventore possimus illum nam eos alias quam, consequuntur,
        quidem architecto dignissimos nihil. Voluptate nam officiis accusantium
        quasi ex odio labore fugiat, repellat magnam in animi porro nihil
        asperiores nulla nemo perspiciatis sapiente. Perferendis, neque eum!
        Deleniti voluptatum impedit eos. Corporis et impedit dolore dicta
        delectus natus deleniti officia illum, quia earum neque fugit.
      </p>
      <button onClick={getUsers}>Get Users</button>
      <div>
        {state.length > 0 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="radios">
              <input
                type="radio"
                defaultChecked
                name="gender"
                onChange={NoFilter}
              />
              ALL
            </div>
            <div className="radios">
              <input type="radio" name="gender" onChange={filterMale} />
              Male
            </div>
            <div className="radios">
              <input type="radio" name="gender" onChange={filterFemale} />
              Female
            </div>
          </div>
        )}
      </div>
      {state.length > 0 && (
        <table width="1000px" className="UserTable" cellPadding="10">
          <thead style={{ backgroundColor: "black", color: "white" }}>
            <tr>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>DETAILS</th>
            </tr>
          </thead>

          <tbody align="center">
            {state.map((user) => {
              return (
                <tr>
                  <td>
                    <img src={user.picture.medium} width="70" height="70" />
                  </td>
                  <td>{user.name.first}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>
                    <button>Details</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default User;
