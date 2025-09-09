import React, { useEffect, useState } from "react";
import axios from "axios";

const Comp2filter = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  //  filter logic:
  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  //   const filterUsers = users.filter(
  //     (user) =>
  //       user.name.toLowerCase().includes(search.toLowerCase()) || // match name
  //       user.id.toString().includes(search) // match id
  //   );

  return (
    <div>
      <h1>Search Users</h1>
      <input
        type="text"
        placeholder="Search by name or ID..."
        value={search} // use state variable 
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px" }}
      />

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
          {filterUsers.map((user) => (
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
  );
};

export default Comp2filter;
