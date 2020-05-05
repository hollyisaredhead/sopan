import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth0Client from './utils/Auth';
import './App.css';

import AppBarHS from "./components/AppBar/AppBar";
import LogIn from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/SignUp/SignUp";
// import Homepage from "./pages/Rooms/Homepage/Homepage";
import ViewingRoom from "./pages/Rooms/ViewingRoom/ViewingRoom";
import Callback from "./components/Callback/Callback";
import SecuredRoute from "./components/SecuredRoute/SecuredRoute";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export default () => {

  //hook for light vs dark mode
  const [darkMode, setDarkMode] = useState(true);
  const [checkingSession, setCheckingSession] = useState(true);

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
      MuiTypography: {
        body1: {
          fontSize: "3",
          fontWeight: "600"
        },
      },
      MuiExpansionPanelSummary: {
        root: {
          disabled: {
            opacity: "0.0",
          },
        },
      },
      MuiExpansionPanelSummary: {
        body1: {
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

  async function checkSession() {
    if (window.location.pathname === '/viewingroom') {
      setCheckingSession(false);
      return;
    }
    try {
      await auth0Client.silentAuth();
      setCheckingSession(false);
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }

    setCheckingSession(false);
  }

  useEffect(() => {
    checkSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBarHS toggleTheme={toggleTheme} style={{ margin: 0 }} />
        <div className="App">
          <Switch>
            <Route exact path={["/", "/login"]}><LogIn /></Route>
            <Route exact path="/signup"><SignUp /></Route>
            <Route exact path='/callback' component={Callback} />
            {/* <Route exact path={["/homepage"]}><Homepage /></Route> */}
            <SecuredRoute exact path={["/viewingroom"]} checkingSession={checkingSession} component={ViewingRoom}></SecuredRoute>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>

  );
}