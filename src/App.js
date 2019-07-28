import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/Appbar";
import Login from "./components/Login";
import Admin from "./components/Admin";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
