import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import ProfileCard from './components/profile-card/ProfileCard';
// import ProfileCardList from './components/profile-card-list/profile-card-list.component';

import App from "./App";
// import Demo from './Demo'
// import FunctionalComponent from './FunctionalComponent'
// import ClassComponent from './ClassComponent';
// import Profile from './Profile'
import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render(
//   <Demo first_name = "Shubham Tandale" />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <FunctionalComponent name="Functional Component" />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <ClassComponent name="Class Component" />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div className="container">
    <center>
      <span id="heading">User Profiles</span>
    </center>
    <App />
  </div>,
  document.getElementById("root")
);
