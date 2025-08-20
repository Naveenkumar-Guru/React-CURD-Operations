import Axios from "axios";
import React from "react";

class TableclassCompA extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  GetUserData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((Respones) => {
        this.setState({ users: Respones.data });
      })
      .catch((Error) => {
        console.log(Error, "Data is empty");
      });
  };

  componentDidMount() {
    this.GetUserData();
  }

  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.state.users, null, 2)}</pre> */}
        <table border="1" cellPadding="12">
          <thead>
            <tr>
              <th>user_id</th>
              <th>user_name</th>
              <th>user_email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableclassCompA;
