// map() → "Rendering Lists"
// React docs: “Use map() to render a list of elements.”
// Example: show table rows, cards, dropdown options.

import React, { useEffect, useState } from "react";
import axios from "axios";

const Comp1Map = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((responsive) => {
        setUsers(responsive.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
        <h1>Map</h1>
        <div>
          <table border="3" cellPadding="10">
            <thead>
              <tr>
                <th>User id</th>
                <th>User name</th>
                <th>User email</th>
                <th>User City</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Comp1Map;
