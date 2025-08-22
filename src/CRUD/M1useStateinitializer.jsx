import React, { useState } from "react";

const M1useStateinitializer = () => {
  let [users] = useState([
    {
      id: 1,
      name: "Naveen kumar",
      email: "naveen@123gmail.com",
      address: {
        street: "abc",
        city: "Bng",
      },
      phone: "9876543210",
      website: "naveen.org",
      company: {
        name: "TCS",
        loc: "Marathahalli",
      },
    },
  ]);

  return (
    <div>
      <h1>stateinstializer</h1>
      <table>
        <thead>
          <tr>
            <th>users_id</th>
            <th>users_name</th>
            <th>users_email</th>
            <th>address_street</th>
            <th>address_city</th>
            <th>users_id</th>
            <th>phone</th>
            <th>website</th>
            <th>company_name</th>
            <th>company_loc</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default M1useStateinitializer;
