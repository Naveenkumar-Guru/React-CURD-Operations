// ******************************************CRUD**********************************************
// import "bootstrap/dist/css/bootstrap.css";
// import Table1API from "./CRUD/Table1API";
// import TableclassCompA from "./CRUD/TableclassCompA";
// import UsingstateFuncompA from "./CRUD/UsingstateFuncompA";
// import M1useStateinitializer from "./CRUD/M1useStateinitializer";
// import M2insidecomponent from "./CRUD/M2insidecomponent";

// import ENavbar from "./CRUD/MountingUpdateUnmounting/ENavbar";

// const App = () => {
//   return (
//     <div>
//       {/* <Table1API />
//       <TableclassCompA />
//       <UsingstateFuncompA />
//       <M1useStateinitializer />
//       <M2insidecomponent /> */}
//       <ENavbar />
//     </div>
//   );
// };
// export default App;

//**********************************************Events***************************************************

// import Events from "./Events/Events";
// import MouseEvents from "./MouseEvents/MouseEvents";
// const App = () => {
//   return (
//     <div>
//       <Events />
//       <MouseEvents />
//       {/* <RegistrationformClasscomp /> */}
//       {/* <RegistrationsStateform /> */}
//       {/* <Login /> */}
//       {/* <StaffLoginForm /> */}
//       {/* <EmployeeRegistration /> */}
//     </div>
//   );
// };

// export default App;

//****************************************Forms***********************************************/

// import RegistrationformClasscomp from "./Forms/RegistrationformClasscomp";
// import RegistrationsStateform from "./Forms/RegistrationsStateform";
// import Login from "./Forms/Login";
// import StaffLoginForm from "./Forms/StaffLoginForm";
// import EmployeeRegistration from "./Forms/EmployeeRegistration";

// const App = () => {
//   return (
//     <div>
//       <RegistrationformClasscomp />
//       <RegistrationsStateform />
//       <Login />
//       <StaffLoginForm />
//       <EmployeeRegistration />
//     </div>
//   );
// };

// export default App;

//*********************************************Practice-Level-projects*****************************************
// import React from "react";
//import CounterApp from "./Practice-Level-Projects/CounterApp/CounterApp";
// import ColorPicker from "./Practice-Level-Projects/ColorPickerApp/ColorPicker";
// import LightDarkModes from "./Practice-Level-Projects/LightmodeDarkmode/LightDarkModes";
// import CounterApp from "./Components/Projects/Counter/CounterApp";

// const App = () => {
//   return (
//     <div>
//       {/* <CounterApp /> */}
//       {/* <ColorPicker /> */}
//       <LightDarkModes />
//     </div>
//   );
// };

// export default App;

//***************************************Navbar*************************************************

// import "bootstrap/dist/css/bootstrap.css";
// // version-5
// import Navbar from "./Navbar/Navbar";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   );
// };

// export default App;

// ........................................AssignmentArray.............................................
// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Comp1Map from "./AssignmentArray Methods/Comp1Map";
// import Comp2filter from "./AssignmentArray Methods/Comp2filter";
// import Comp3fil from "./AssignmentArray Methods/Comp3fil";
// import Comp3Reduce from "./AssignmentArray Methods/Comp3Reduce";
// import Comp4Mapfilter from "./AssignmentArray Methods/Comp4Mapfilter";
// import Comp5Find from "./AssignmentArray Methods/Comp5Find";
// import Login from "./LoginDetails/Login";
// import NewLogin from "./LoginDetails/NewLogin";
// import UseMemo from "./Usememo/UseMemo";

// const App = () => {
//   return (
//     <div>
//       {/* <Comp1Map /> */}
//       {/* <Comp2filter /> */}
//       {/* <Comp3Reduce /> */}
//       {/* <Comp4Mapfilter /> */}
//       {/* <Comp5Find /> */}
//       {/* <Login /> */}
//       {/* <NewLogin /> */}
//       <UseMemo />
//     </div>
//   );
// };

// export default App;
//***************************************Redux*************************************************
import React from "react";
import Message from "./ComponentsRedux/Message";
import store from "./ComponentsRedux/REDUX/Store";
import { Provider } from "react-redux";
import Products from "./ComponentsRedux/REDUX/Products/Products";

const App = () => {
  return (
    <Provider store={store}>
      <hr></hr>
      <h1>Message</h1>
      <Message />
      <hr></hr>
      <hr></hr>
      <Products />
    </Provider>
  );
};

export default App;
