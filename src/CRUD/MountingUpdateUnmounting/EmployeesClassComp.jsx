// import axios from "axios";
// import React, { Component } from "react";

// Class Component

// class EmployeesClassComp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       employees: [], // ✅ correct way to define state
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((resp) => {
//         this.setState({ employees: resp.data }); // ✅ update state
//       })
//       .catch((error) => {
//         console.log("catch the error", error);
//       });
//   }

//   componentDidUpdate() {
//     console.log("Component updated ");
//   }

//   componentWillUnmount() {
//     console.log("Naveen kumar  component will unmount");
//   }

//   render() {
//     const { employees } = this.state;

//     return (
//       <div>
//         {/* Debug: show full state */}
//         {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}

//         <h3>Employees Table</h3>
//         {employees.length > 0 ? (
//           <table border={2}>
//             <thead>
//               <tr>
//                 <th>User Id</th>
//                 <th>Username</th>
//                 <th>Email</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((emp) => (
//                 <tr key={emp.id}>
//                   <td>{emp.id}</td>
//                   <td>{emp.username}</td>
//                   <td>{emp.email}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <h4>Loading data...</h4>
//         )}
//       </div>
//     );
//   }
// }

// export default EmployeesClassComp;

// function component

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const EmployeesClassComp = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        // console.log(resp.data);
        setUsers(resp.data); // ✅ update state
      })
      .catch((error) => {
        console.log("catch error", error);
      });
  }, []);
  return (
    <div>
      <h1>Function component useEffect</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>user id</th>
              <th>user Name</th>
              <th>user Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesClassComp;
