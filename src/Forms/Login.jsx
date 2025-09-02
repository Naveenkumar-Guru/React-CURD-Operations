import { useState } from "react";

const Login = () => {
  let [user, setUser] = useState({ uEmail: "", upassword: "" });

  let updateuser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  let formSubmit = (event) => {
    event.preventDefault();
    alert("Updated Successfully");
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="uEmail"
          onChange={updateuser}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="upassword"
          onChange={updateuser}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
