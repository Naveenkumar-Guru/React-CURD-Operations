// Way 1 → useState initializer (what you have now)
// Way 2 → inside component with if (users.length === 0)
// Way 3 → IIFE (self-calling function with same condition)
// Way 4 → onClick button (or any event)
// Way 5 → useEffect (standard way)

import Axios from "axios";
import { useState } from "react";

const UsingstateFuncompA = () => {
  let [users, setusers] = useState([]);
  let GetusersData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        setusers(Response.data);
      })
      .catch((error) => {
        console.log(error, "please fixit");
      });
  };
  if (users.length === 0) {
    GetusersData();
  }
  return (
    <>
      <div className="container">
        <div className="row"></div>
        <div className="col-6">
          <table>
            <thead>
              <tr>
                <th>user_id</th>
                <th>user_Lname</th>
                <th>user_fname</th>
                <th>User_email</th>
                <th>User_address_street</th>
                <th>suite</th>
                <th>city</th>
                <th>zipcode</th>
                <th>geo_lat</th>
                <th>geo_lng</th>
                <th>user_phone</th>
                <th>website</th>
                <th>company_name</th>
                <th>company_catchPhrase</th>
                <th>company_bs</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.street}</td>
                  <td>{user.address.suite}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.zipcode}</td>
                  <td>{user.address.geo.lat}</td>
                  <td>{user.address.geo.lng}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                  <td>{user.company.catchPhrase}</td>
                  <td>{user.company.bs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </>
  );
};

export default UsingstateFuncompA;
