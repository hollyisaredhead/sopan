import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import './App.css';
import Chat from "./pages/Rooms/Homepage/Homepage";
import ViewingRoom from "./pages/Rooms/ViewingRoom/ViewingRoom";

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
          <Route exact path={["/homepage"]}>
            <Chat />
          </Route>
          <Route exact path={["/viewingroom"]}>
            <ViewingRoom />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
