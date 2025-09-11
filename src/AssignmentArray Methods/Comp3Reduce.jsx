import React, { useEffect, useState } from "react";
import axios from "axios";

const Comp3Reduce = () => {
  const [users, setUsers] = useState([]); // Store API users
  const [search, setSearch] = useState(""); // Search input state

  // 1️ Fetch users from API on component mount
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("Error fetching users:", err));
  }, []);

  //  Filter → search users by name
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  //  Map → extract names for display
  const mappedNames = filteredUsers.map((user) => user.name);

  //  Reduce → calculate total length of names
  const totalNameLength = filteredUsers.reduce(
    (sum, user) => sum + user.name.length,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Practice: Filter, Map & Reduce</h1>

      {/* Search bar for practice */}
      <input
        type="text"
        placeholder="Type to search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "250px" }}
      />

      {/* Map → show filtered user names */}
      <h2>Filtered Users (map)</h2>
      <ul>
        {mappedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {/* Reduce → total length */}
      <h2>Total Length (reduce)</h2>
      <p>{totalNameLength}</p>

      {/* Optional: show raw filtered users for learning */}
      <h2>Filtered Users Raw Data</h2>
      <pre>{JSON.stringify(filteredUsers, null, 2)}</pre>
    </div>
  );
};

export default Comp3Reduce;



