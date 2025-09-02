import React, { useState } from "react";

function RegistrationsStateform() {
  const [formData, setFormData] = useState({
    uName: "",
    uEmail: "",
    uMobileNo: "",
  });
  const updateHandle = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const submithandler = (event) => {
    event.preventDefault();
    console.log(formData);
    alert(
      `Name: ${formData.uName}\nEmail: ${formData.uEmail}\nMobile: ${formData.uMobileNo}`
    );
  };
  return (
    <div>
      <form onSubmit={submithandler}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          name="uName"
          onChange={updateHandle}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          name="uEmail"
          onChange={updateHandle}
        />
        <label>Name</label>
        <input
          type="number"
          placeholder="Mobile No"
          name="uMobileNo"
          onChange={updateHandle}
        />
        <input type="submit" value={"Registrations"} />
      </form>
    </div>
  );
}

export default RegistrationsStateform;
