import { useState } from "react";
import "./Staff.css";

const StaffLoginForm = () => {
  let [Staff, setStaff] = useState({ SName: "", Spassword: "" });

  let updateuser = (event) => {
    setStaff({ ...Staff, [event.target.name]: event.target.value });
  };

  let submitData = (event) => {
    event.preventDefault();
    alert("Login Successful");
    console.log(Staff);
  };

  return (
    <div className="login-container">
      <div className="login-header">LOGIN</div>
      <form onSubmit={submitData}>
        <label>UserName</label>
        <input
          type="text"
          placeholder="UserName"
          name="SName"
          onChange={updateuser}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="Spassword"
          onChange={updateuser}
          required
        />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
};

export default StaffLoginForm;
