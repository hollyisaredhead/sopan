import React, { useEffect } from 'react';
import {
    Grid,
    makeStyles,
    Container,
    Paper,
    Typography,
    Avatar,
    TextField,
    Button,
} from "@material-ui/core";
import API from '../../utils/API';
import auth0Client from "../../utils/Auth";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        maxHeight: "100%",
        width: "100%",
        flexGrow: 1,
        backgroundColor: theme.palette.paper.main
    },
    paper: {
        height: "100%",
        width: "100%",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        margin: "auto",
    },
    subWrapper1: {
        display: 'flex',
        minHeight: "100vh",
        maxHeight: "100%",
        width: "auto",
        backgroundColor: theme.palette.paper.main,
    },
    welcome: {
        textAlign: "center",
        margin: "auto",
        padding: 20,
        color: theme.palette.primary.main,
    },
    avatar: {
        justifyContent: 'center',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    textInput: {
        textAlign: "left",
        padding: 10,
    },
    profileTypography: {
        padding: 5,
    },
    typography: {
        marginTop: 10,
        padding: 5,
    },
    btn: {
        marginTop: 15,
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.paper.main
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    useEffect(() => {

        refreshUser();

    }, [])

    const refreshUser = () => {
        let usernameDiv = document.getElementById("username");
        let avatarDiv = document.getElementById("avatar-div");

        API.getUser(auth0Client.getProfile().email)
            .then((result) => {
                usernameDiv.textContent = `Username: ${result.data.nickname}`
                avatarDiv.innerHTML = `<div class="MuiAvatar-root MuiAvatar-circle" style="margin: 10px; width: 70px; height: 70px;";><img alt=${result.data.nickname} src=${result.data.avatar} class="MuiAvatar-img"></div>`
            })
            .catch(err => console.log(err));
    }

    const updateUsername = () => {
        let newUsernameDiv = document.getElementById("new-username");
        API.updateUser(auth0Client.getProfile().email, { nickname: newUsernameDiv.value })
            .then(refreshUser)
            .then(() => { window.location.href = "/viewingroom" })
            .catch(err => console.log(err));
    }

    return (
        <div className={classes.root}>
            <div className={classes.subWrapper1}>
                {/* <Container maxWidth="lg"> */}
                <Grid
                    className={classes.container}
                    item
                    container
                    alignItems="center"
                    justify={"center"}
                    xs={12}
                    md={10}
                >
                    <Grid
                        className={classes.welcome}
                        alignItems="center"
                        justify={"center"}
                        xs={12}
                        md={10}
                    >
                        <Typography align="middle" variant="h3" >
                            User Profile
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper className={(classes.paper)}>
                            <div id="avatar-div" className={classes.avatar}>
                                <Avatar id="avatar" alt="" src=""
                                    style={{
                                        margin: "10px",
                                        width: "70px",
                                        height: "70px",
                                    }}
                                />
                            </div>
                            <Grid className={classes.textInput} >
                                <Typography id="username" className={classes.typography}>
                                    Username:
                                </Typography>
                                <TextField
                                    // variant="outlined"
                                    fullWidth
                                    id="new-username"
                                    label="New username"
                                    name="Username"
                                    autoComplete="Username"
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                alignItems="center"
                                justify={"center"}
                            >
                                <Button variant="contained" className={classes.btn} onClick={updateUsername}>Save</Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                {/* </Container> */}
            </div>
        </div>
    );
}
