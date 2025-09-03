import React, { Component } from "react";
class EmployeeRegistration extends Component {
  render() {
    return (
      <div>
        <h1>Employee Registration From</h1>
        <div>
          <label>Employee Name</label>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last" />
          <input type="checkbox" value="Male" />M
          <input type="checkbox" value="Female" />M
        </div>
      </div>
    );
  }
}

export default EmployeeRegistration;
