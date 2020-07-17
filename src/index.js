import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'paper-kit-2/assets/sass/paper-kit.scss';
import './assets/css/my-button.css';

import NavBar from "components/S0_Navbar.js";
import Home from "views/Home.js";
import Footer from "components/SL_Footer.js";

ReactDOM.render(
  <>
    <NavBar />
    <Home />
    <Footer />
  </>,
  document.getElementById("root")
);
