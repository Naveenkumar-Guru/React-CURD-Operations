import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Comp4Mapfilter.css";

const Comp4Mapfilter = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [city, SetCity] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        setUsers(Response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) || //by using &  name
      u.id.toString().includes(search) || //email
      u.email.toLowerCase().includes(search) //email
  );
  const cityFilteredUsers = filteredUsers.filter((u) =>
    city ? u.address.city.toLowerCase().includes(city.toLowerCase()) : true
  );

  return (
    <div>
      <h1>Filtered Users</h1>

      <div className="main-container">
        <input
          className="input-search"
          type="text"
          placeholder="Search by ID,Name,Email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          className="input-search"
          type="text"
          placeholder="Search byCity"
          value={city}
          onChange={(e) => SetCity(e.target.value)}
        />

        <h1>API Data</h1>
        {cityFilteredUsers.map((u) => (
          <div
            className="map-container"
            key={u.id}
            style={{ marginBottom: "15px" }}
          >
            <p>
              <b>ID:</b> {u.id}
            </p>
            <p>
              <b>Name:</b> {u.name}
            </p>
            <p>
              <b>Email:</b> {u.email}
            </p>
            <p>
              <b>City:</b> {u.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comp4Mapfilter;
