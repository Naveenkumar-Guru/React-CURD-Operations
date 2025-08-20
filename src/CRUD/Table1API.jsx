import Axios from "axios";

const Table1API = () => {
  let getUserData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((Req) => {
        console.log(Req.data);
      })
      .catch((Error) => {
        console.log(Error.msg);
      });
  };
  return (
    <div>
      <h1>User components</h1>
      <button onClick={getUserData}>Get users</button>
    </div>
  );
};

export default Table1API;
