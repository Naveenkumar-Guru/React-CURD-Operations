import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  // State for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log("Email:", email);
    console.log("Password:", password);
    alert(`Login with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "10px" }}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
