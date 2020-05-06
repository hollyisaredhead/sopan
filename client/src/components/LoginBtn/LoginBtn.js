import React from 'react';
import {
    makeStyles,
    Button,
    Typography,
} from '@material-ui/core';

import auth0Client from "../../utils/Auth";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    Btn: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.signUp.font,
        color: theme.palette.signUp.font,

    },
    BtnFont: {
        fontWeight: "bold",
        color: theme.palette.signUp.main,
    }
}));


export default function FormDialog() {

    const classes = useStyles();

    return (
        <div >
            <Button className={classes.Btn} variant="outlined" size="small" onClick={auth0Client.signIn}>
                <Typography className={classes.BtnFont}>Get Started</Typography>
            </Button>
        </div>
    );
}
