import Axios from "axios";

const Table1API = () => {
  let getUserData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((Respones) => {
        console.log(Respones.data);
      })
      .catch((Error) => {
        console.log(Error, "the data is not coming");
      });
  };
  return (
    <div>
      <h1>User components</h1>
      <pre>{JSON.stringify([])}</pre>
      <button onClick={getUserData}>Get users</button>
    </div>
  );
};

export default Table1API;
