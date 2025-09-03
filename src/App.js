// import Table1API from "./CRUD/Table1API";
// import TableclassCompA from "./CRUD/TableclassCompA";
// import UsingstateFuncompA from "./CRUD/UsingstateFuncompA";
// import M1useStateinitializer from "./CRUD/M1useStateinitializer";
// import M2insidecomponent from "./CRUD/M2insidecomponent";
// import Events from "./Events/Events";
// import M3 from "./CRUD/M3";
// import MouseEvents from "./MouseEvents/MouseEvents";
// import RegistrationformClasscomp from "./Forms/RegistrationformClasscomp";
// import RegistrationsStateform from "./Forms/RegistrationsStateform";
// import Login from "./Forms/Login";
// import StaffLoginForm from "./Forms/StaffLoginForm";
// import EmployeeRegistration from "./Forms/EmployeeRegistration";
import Navbar from "./Navbar/Navbar";

// const App = () => {
//   return (
//     <div>
//       {/* <Table1API /> */}
//       {/* <TableclassCompA /> */}
//       {/* <UsingstateFuncompA /> */}
//       {/* <M1useStateinitializer /> */}
//       {/* <M2insidecomponent /> */}
//       {/* <M3 /> */}
//       {/* <Events /> */}
//       {/* <MouseEvents /> */}
//       {/* <RegistrationformClasscomp /> */}
//       {/* <RegistrationsStateform /> */}
//       {/* <Login /> */}
//       {/* <StaffLoginForm /> */}
//       {/* <EmployeeRegistration /> */}

//     </div>
//   );
// };

// export default App;

// .............................

// import "bootstrap/dist/css/bootstrap.css";
import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Navbar/components/Home";
// import About from "./Navbar/components/About";
// import Contact from "./Navbar/components/Contact";
// import Services from "./Navbar/components/Services";
const App = () => {
  return (
    <div>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/index" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router> */}
      <Navbar />
    </div>
  );
};

export default App;
