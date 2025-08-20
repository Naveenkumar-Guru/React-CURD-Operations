import axios from "axios";

const Table1API = () => {
  let tablefunction = () => {
    let getdata = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((respons) => {
          console.log(respons.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  return (
    <div>
      <h1>Table API components</h1>
      <pre>{JSON.stringify.}</pre>
      <button onClick={tablefunction}>Table data</button>
    </div>
  );
};

export default Table1API;
