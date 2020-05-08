import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth0Client from './utils/Auth';
import './App.css';

import AppBarHS from "./components/AppBar/AppBar";
import LogIn from "./pages/LandingPage/LandingPage";
// import Homepage from "./pages/Rooms/Homepage/Homepage";
import ViewingRoom from "./pages/Rooms/ViewingRoom/ViewingRoom";
import Callback from "./components/Callback/Callback";
import SecuredRoute from "./components/SecuredRoute/SecuredRoute";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import API from "./utils/API";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export default () => {
  const [user, setUser] = useState({});

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
      signUp: {
        main: "#f57c00",
        font: "#fafafa",
        paper: {
          main: darkMode ? "#fafafa" : "#212121",
          secondary: darkMode ? "#f57c00" : "#0288d1",
        },
      },
      header: {
        primary: { main: darkMode ? "#212121" : "#0288d1" },
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
      MuiList: {
        list: {
          alignItems: "flex-start",
          alignContent: "flex-start",
        },
      },
      MuiMenu: {
        list: {
          padding: 0,
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: "white",
        },
      },
      MuiCardHeader: {
        root: {
          paddingBottom: 10,
          paddingTop: 10

        },
      },
      MuiGrid: {
        container: {
          paddingTop: 15,
          height: "auto"
        },
      },
      MuiTypography: {
        body1: {
          fontSize: "1",
          fontWeight: "550"
        },
        body2: {
          fontSize: "12pt",
          fontWeight: "600"
        },
        h6: {
          fontSize: "12pt",
          fontWeight: "600",
          padding: "7px"
        }
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



  useEffect(() => {
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

    checkSession().then(() => {
      if (auth0Client.isAuthenticated()) {
        API.getUser(auth0Client.profile.email)
          .then(result => {
            if (!result.data) {
              let newUser;
              newUser = {
                avatar: auth0Client.getProfile().picture,
                nickname: auth0Client.getProfile().nickname,
                email: auth0Client.getProfile().email
              }
              console.log("creating")
              API.createUser(newUser).then((result) => {
                console.log(result.data)
                setUser(newUser);
              })
            }
            else {
              setUser(result.data);
            }
          })
          .catch(err => console.log(err));
      }
    }

    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBarHS toggleTheme={toggleTheme} user={user} />
        <div className="App">
          <Switch>
            <Route exact path={["/", "/login"]}><LogIn /></Route>
            <Route exact path='/callback' component={Callback} />
            {/* <Route exact path={["/homepage"]}><Homepage /></Route> */}
            {/* <SecuredRoute exact path={["/homepage"]} checkingSession={checkingSession} component={Homepage}></SecuredRoute> */}
            <SecuredRoute exact path={["/viewingroom"]} checkingSession={checkingSession} component={ViewingRoom}></SecuredRoute>
            <SecuredRoute exact path={["/profile"]} checkingSession={checkingSession} component={ProfilePage}></SecuredRoute>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>

  );
}