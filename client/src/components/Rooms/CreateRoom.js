import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import { PromiseProvider } from 'mongoose';
import { createGenerateClassName } from '@material-ui/core';

import API from "../../utils/API";

export default function FormDialog(props) {
    const [open, setOpen] = useState(false);

    console.log("create", props.room)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

        const createName = document.getElementById("createName")
        const createPW = document.getElementById("createPW");
        if (createName !== "" && createPW != "") {
            console.log("name", createName.value)
            console.log("pw", createPW.value)

            let newRoom = {
                roomName: createName.value,
                password: createPW.value
            };

            console.log(newRoom)

            API.createRoom(newRoom)
                .then(result => {
                    console.log(result.data);
                    setOpen(false);

                    window.location = "/viewingroom/" + createName.value;
                })
                .catch(err => console.log(err));
        }

    }

    return (
        <div>
            <Button variant="outlined" color="black" onClick={handleClickOpen}>
                <AddToQueueIcon fontSize="large" />
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create a Room</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create a viewing room to watch with your friends
                    </DialogContentText>

                    <TextField
                        // autoFocus
                        margin="dense"
                        id="createName"
                        label="Room Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        // autoFocus
                        margin="dense"
                        id="createPW"
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
                        Create Room
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
