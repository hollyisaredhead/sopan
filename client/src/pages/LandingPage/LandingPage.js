import React from "react";
import {
    Grid,
    makeStyles,
    Container,
    Typography,
} from "@material-ui/core";

import pandemicMap from "../../assets/images/pandemicMap3.svg"
import LoginBtn from "../../components/LoginBtn/LoginBtn";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100vw",
        maxWidth: "100%",
    },
    container: {
        height: "80vh",
        margin: "auto",
    },
    subWrapper1: {
        display: 'flex',
        minHeight: "100vh",
        maxHeight: "100%",
        width: "auto",
        backgroundColor: theme.palette.paper.main,
    },
    description: {
        marginTop: "auto",
    },
    descriptionContainer: {
        marginBottom: 20,
    },
    getStarted: {
        textDecoration: "none",
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.subWrapper1}>
                <Container >
                    <Grid
                        className={classes.container}
                        item
                        container
                        // direction="column"
                        alignItems="center"
                        justify={"center"}
                        xs={12}
                        md={10}
                    >
                        <Grid item xs={12} md={5}>
                            <img className={classes.img} src={pandemicMap} alt="" />
                        </Grid>
                        <Grid item container justify="center" xs={12} md={6}>
                            <Grid
                                item
                                sm={12}
                                container
                                justify="center"
                                className={classes.descriptionContainer}
                            >
                                <Grid item sm={5}>
                                    <Typography align="middle" variant="h3" color="primary">
                                        So[Pan]
                      </Typography>
                                </Grid>
                            </Grid>
                            <Grid item sm={6}>
                                <Typography variant="subtitle1" color="secondary">
                                    Share Videos, Music, and spend time with your friends and family.
                    </Typography>
                                <LoginBtn />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}
