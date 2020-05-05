import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SignUp from './SignUp';

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
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button className={classes.Btn} variant="outlined" size="small" onClick={handleClickOpen}>
                <Typography className={classes.BtnFont}>Get Started</Typography>
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <SignUp />
                </DialogContent>
            </Dialog>
        </div>
    );
}
