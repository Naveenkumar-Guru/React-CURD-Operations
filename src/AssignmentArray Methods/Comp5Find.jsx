import axios from "axios";
import React, { useEffect, useState } from "react";

const Comp5Find = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(); // ✅ fixed syntax

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setStudents(resp.data);
      })
      .catch((error) => {
        console.log("find error", error);
      });
  }, []);

  // find single student by selectedId
  const student = students.find((s) => s.id === selectedId);

  // filter students by search
  const filteredStudents = students.filter((s) =>
    s.id.toString().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Find Method Example</h1>

      {/* input to search by ID */}
      <input
        className="input-id"
        type="text"
        placeholder="Search by ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        className="input-id"
        type="number"
        placeholder="Enter ID to Find"
        value={selectedId || ""}
        onChange={(e) => setSelectedId(Number(e.target.value))}
      />

      {student ? (
        <div>
          <h1>Student with selectedId = {selectedId}</h1>
          <ul key={student.id}>
            <li>
              <strong>ID:</strong> {student.id}
            </li>
            <li>
              <strong>Name:</strong> {student.name}
            </li>
            <li>
              <strong>Email:</strong> {student.email}
            </li>
            <li>
              <strong>Address:</strong> {student.address.street}
            </li>
            <li>
              <strong>City:</strong> {student.address.city}
            </li>
            <li>
              <strong>Phone:</strong> {student.phone}
            </li>
          </ul>
        </div>
      ) : (
        <p>Loading student...</p>
      )}

      <h2>Filtered Students</h2>
      {filteredStudents.length > 0 ? (
        filteredStudents.map((std) => (
          <ul key={std.id}>
            <li>
              <strong>ID:</strong> {std.id}
            </li>
            <li>
              <strong>Name:</strong> {std.name}
            </li>
            <li>
              <strong>Email:</strong> {std.email}
            </li>
            <li>
              <strong>Address:</strong> {std.address.street}
            </li>
            <li>
              <strong>City:</strong> {std.address.city}
            </li>
            <li>
              <strong>Phone:</strong> {std.phone}
            </li>
          </ul>
        ))
      ) : (
        <p>No Students found</p>
      )}
    </>
  );
};

export default Comp5Find;
