import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={["/", "/login"]}>
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
