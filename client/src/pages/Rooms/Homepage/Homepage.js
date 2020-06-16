import React from 'react';
import {
    Grid,
    makeStyles,
    Container,
    Paper,
    Typography,
    Box,
    Divider,
    Button,
    withStyles,
} from "@material-ui/core";
import ButtonBase from '@material-ui/core/ButtonBase';

import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import CreateRoom from '../../../components/Rooms/CreateRoom';
import JoinRoom from '../../../components/Rooms/JoinRoom';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        maxHeight: "100%",
        width: "100%",
        flexGrow: 1,
        backgroundColor: theme.palette.paper.main
    },
    paper: {
        height: "25vh",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    wrapper: {
        width: "100vw",
        maxWidth: "100%",
    },
    container: {
        height: "70vh",
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
        margin: "auto",
    },
    typography: {
        paddingTop: 20,
    },
    btn: {
        paddingTop: 30,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.subWrapper1}>
                <Container maxWidth="lg">
                    <Grid
                        className={classes.container}
                        item
                        container
                        alignItems="center"
                        justify={"center"}
                        spacing={5}
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
                                Welcome!
                      </Typography>
                            <Typography variant="subtitle1" color="secondary">
                                It's never been easier to join or start a room with your friends.
                    </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Paper className={classes.paper}>
                                <Typography align="middle" variant="h5" >
                                    Create a Room
                      </Typography>
                                <Grid
                                    item
                                    container
                                    alignItems="center"
                                    justify={"center"}
                                    spacing={0}
                                    xs={12}
                                    md={10}
                                >
                                    <Grid item xs={3}>
                                        <Button className={classes.btn}>
                                            {/* <AddToQueueIcon fontSize="large" /> */}
                                            <CreateRoom />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography className={classes.typography}>
                                            Create a room and start watching.
                                         </Typography>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={5}>
                            <Paper className={classes.paper}>
                                <Typography align="middle" variant="h5" >
                                    Join a Room
                      </Typography>
                                <Grid
                                    item
                                    container
                                    alignItems="center"
                                    justify={"center"}
                                    spacing={0}
                                    xs={12}
                                    md={10}
                                >
                                    <Grid item xs={3}>
                                        <Button className={classes.btn}>
                                            {/* <ExitToAppIcon fontSize="large" /> */}
                                            <JoinRoom />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography className={classes.typography}>
                                            Join a room to watch with your friends and family.
                                         </Typography>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        </div>
    );
}
