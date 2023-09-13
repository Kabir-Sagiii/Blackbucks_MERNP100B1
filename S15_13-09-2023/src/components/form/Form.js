import { Component } from "react";
import "../register/Register.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      formdata: {
        name: "",
        password: "",
        gender: "",
      },
      newdata: [],
    };
  }

  handleForm = () => {
    this.setState({
      ...this.state,
      newdata: [...this.state.newdata, this.state.formdata],
    });
  };
  render() {
    return (
      <div className="formcontainer">
        <div className="Register">
          <h2>User Form</h2>
          <div className="box">
            <input
              type="text"
              placeholder="User Name"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  formdata: {
                    ...this.state.formdata,
                    name: e.target.value,
                  },
                });
              }}
            />
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  formdata: {
                    ...this.state.formdata,
                    password: e.target.value,
                  },
                });
              }}
            />
          </div>
          <div className="box">
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  formdata: {
                    ...this.state.formdata,
                    gender: e.target.value,
                  },
                });
              }}
            />
            Male
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  formdata: {
                    ...this.state.formdata,
                    gender: e.target.value,
                  },
                });
              }}
            />
            Female
          </div>
          <div className="box">
            <button onClick={this.handleForm}>Register User</button>
          </div>
        </div>
        {this.state.newdata.length > 0 && (
          <div>
            <table
              width={700}
              frame="box"
              rules="all"
              cellPadding="15"
              style={{ margin: "30px auto" }}
            >
              <tr style={{ backgroundColor: "black", color: "white" }}>
                <th>NAME</th>
                <th>PASSWORD</th>
                <th>GENDER</th>
              </tr>
              {this.state.newdata.map((data) => {
                return (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.password}</td>
                    <td>{data.gender}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
