import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

        const joinName = document.getElementById("createName")
        if (joinName !== "") {
            console.log(joinName.value)
            console.log("name", joinName.value)

            setOpen(false);

            window.location = "/viewingroom/" + joinName.value;
        }

    }

    return (
        <div>
            <Button variant="outlined" color="black" onClick={handleClickOpen}>
                <ExitToAppIcon fontSize="large" />
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Join a Room</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Join a room and start watching with your friends
          </DialogContentText>
                    <TextField
                        // autoFocus
                        margin="dense"
                        id="joinName"
                        label="Room Name"
                        type="roomName"
                        fullWidth
                    />
                    <TextField
                        // autoFocus
                        margin="dense"
                        id="joinPW"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="black">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="black">
                        Join Room
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
