import axios from "axios";
import { useState } from "react";

let M2insidecomponent = () => {
  let [users, setUsers] = useState([]);
  let [show, setShow] = useState(false); // 👈 toggle state

  let handleToggle = () => {
    if (!show) {
      // if data is hidden fetch users
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((Response) => {
          setUsers(Response.data);
          setShow(true); // show table
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setUsers([]);
      setShow(false); //hide table
    }
  };
  return (
    <div>
      <h1>InsideComponents</h1>
      <button onClick={handleToggle}>{show ? "Cancle" : "Show Users"}</button>

      {show && (
        <table border="1">
          <thead>
            <tr>
              <th>user_id</th>
              <th>user_name</th>
              <th>user_email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default M2insidecomponent;


