import React, { Component } from "react";

class RegistrationformClasscomp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uName: "",
      uEmail: "",
      uMobileNo: "",
    };
  }
  updateHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submithandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    alert(
      `Name: ${this.state.uName}\nEmail: ${this.state.uEmail}\nMobile: ${this.state.uMobileNo}`
    );
  };

  render() {
    return (
      <div>
        <h1>Registrationform</h1>
        <form onSubmit={this.submithandler}>
          <div>
            <label>Name</label>
            <input type="text" name="uName" onChange={this.updateHandle} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="uEmail" onChange={this.updateHandle} />
          </div>
          <div>
            <label>Mobile</label>
            <input type="number" name="uMobileNo" onChange={this.updateHandle} />
          </div>
          <input type="submit" value={"Registration"} />
        </form>
      </div>
    );
  }
}

export default RegistrationformClasscomp;
