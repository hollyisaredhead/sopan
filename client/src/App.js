import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import AppBarHS from "./components/AppBar/AppBar";
import LogIn from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/SignUp/SignUp";
// import Homepage from "./pages/Rooms/Homepage/Homepage";
import ViewingRoom from "./pages/Rooms/ViewingRoom/ViewingRoom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export default () => {

  //hook for light vs dark mode
  const [darkMode, setDarkMode] = useState(true);

  //initialize theme for material ui
  const theme = createMuiTheme({
    palette: {
      primary: { main: darkMode ? "#fafafa" : "#0288d1" },
      secondary: { main: darkMode ? "#fafafa" : "#0288d1" },
      paper: {
        main: darkMode ? "#f57c00" : "#212121",
        light: darkMode ? "#262626" : "#f5f5f5",
        lighter: darkMode ? "#333333" : "#f5f5f5",
      },
      video: {
        main: darkMode ? "#fafafa" : "#212121",
      },
      chat: {
        main: darkMode ? "#212121" : "#fafafa",
        secondary: darkMode ? "#eeeeee" : "#424242",
        paper: {
          main: darkMode ? "#fafafa" : "#212121",
          secondary: darkMode ? "#9e9e9e" : "#0288d1",
        },
      },
      tertiary: { main: "#FEB2D0" },
      info: { main: "#a6a6a6" },
      signUp: {
        main: "#f57c00",
        font: "#fafafa",
      },

    },
    typography: {
      fontFamily: '"Quicksand", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    overrides: {
      MuiMenu: {
        list: {
          padding: 0,
        },
      },
      MuiExpansionPanelSummary: {
        root: {
          disabled: {
            opacity: "0.0",
          },
        },
      },
    },
    shadows: ["none"],
  });

  // fx to be passed to app bar to toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBarHS toggleTheme={toggleTheme} />
        <div className="App">
          <Switch>
            <Route exact path={["/", "/login"]}><LogIn /></Route>
            <Route exact path="/signup"><SignUp /></Route>
            {/* <Route exact path={["/homepage"]}><Homepage /></Route> */}
            <Route exact path={["/viewingroom"]}><ViewingRoom /></Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>

  );
}

