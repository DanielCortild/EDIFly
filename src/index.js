import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'paper-kit-2/assets/sass/paper-kit.scss';
import './assets/css/my-button.css';

import NavBar from "components/S0_Navbar.js";
import Footer from "components/SL_Footer.js";

import Home from "views/Home.js";

ReactDOM.render(
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact render={props => <Home {...props}/>} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </Router>,
  document.getElementById("root")
);
