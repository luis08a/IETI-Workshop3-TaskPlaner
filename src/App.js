import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import LogIn from "./components/Login";

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { TaskApp } from "./components/TaskApp";

localStorage.setItem('user', 'pass');

function App() {
  const [open, setOpen] = useState(false);
  const [isloggedIn, setLog] = useState(localStorage.getItem('isLoggedIn'));

  const toogleDrawer = close => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(close);
  };
  return (
    <div className="App">
      <Router>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO React App</h1>
        </header>

        <br />
        <br /> */}
        <div>
          <Route
            exact
            path="/"
            component={
              isloggedIn == 'true'
                ? ()=><TaskApp />
                : ()=><LogIn />
            }
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
