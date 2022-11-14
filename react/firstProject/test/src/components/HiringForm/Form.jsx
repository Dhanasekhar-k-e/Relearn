import React from "react";

const initState = {
  name: "",
  password: "",
  maritalStatus: false,
  country: ""
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initState,
      data: []
    };
    this.file = React.createRef();
  }
  handleForm = (e) => {
    e.preventDefault();
    const { data, ...state } = this.state;
    state.image = this.file.current.files[0];
    this.setState({
      data: [...data, state]
    });
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      ...initState
    });
    this.file.current.files = [];
  };
  handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const val = type === "checkbox" ? checked : value;
    this.setState({
      [name]: val
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <form onSubmit={this.handleForm}>
          <div>
            <label>
              Name:{" "}
              <input
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password:{" "}
              <input
                value={this.state.password}
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Marital Status:{" "}
              <input
                value={this.state.maritalStatus}
                name="maritalStatus"
                type="checkbox"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Country of Origin:{" "}
              <select
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
              >
                {["India", "Non-Indian"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              Profile photo
              <input type="file" ref={this.file} />
            </label>
          </div>

          <label>
            <input type="submit" value="SUBMIT" />
          </label>
        </form>
      </>
    );
  }
}
