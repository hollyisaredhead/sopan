import React from 'react';
import {
    Input,
    OutlinedInput,
    Button,
    Popper,
    Typography,
    TextField,
    ClickAwayListener,
    withStyles,
    List,
    Divider,
} from "@material-ui/core";

import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import Covid from '../../../assets/images/coronavirus.png';

// import "./style.css";

const styles = (theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.chat.secondary,
        color: theme.palette.chat.main,
        borderColor: theme.palette.secondary.main,
    },
    container: {
        minHeight: 550,
        width: "15vw",
        // overflow: "auto",
        backgroundColor: theme.palette.chat.paper.main,
        color: theme.palette.chat.main,
    },
    divider: {
        backgroundColor: theme.palette.chat.paper.secondary,
    },
    header: {
        backgroundColor: theme.palette.chat.paper.main,
        color: theme.palette.chat.main,
    },
    avatar: {
        backgroundColor: deepOrange[500],
    },
});

class ChatMessage extends React.Component {

    componentDidMount = () => {
        var socket = window.io();
        const chatForm = document.getElementById('chat-form');
        const message = document.getElementById('m');
        const messageContainer = document.getElementById('message-container');

        chatForm.addEventListener("submit", sendMessage);

        function sendMessage(e) {
            e.preventDefault();
            socket.emit('chat message', message.value);
            message.value = '';
            return false;
        }

        socket.on('chat message', function (msg) {
            let newMessage = document.createElement("li");
            newMessage.innerHTML = msg;
            document.getElementById("messages").appendChild(newMessage);
            window.scrollTo(0, document.body.scrollHeight)
            messageContainer.scrollTop = messageContainer.scrollHeight;

        })
    }




    render() {
        const { classes } = this.props;

        return (
            <div>
                <CardHeader className={classes.header}
                    avatar={
                        <Avatar alt="SoPan" src={Covid} className={classes.avatar}></Avatar>
                    }
                    title="Chat"
                // subheader="filling text to see the placement"
                />
                <Divider classes={{ root: classes.divider }} />
                <div className={(classes.container)} id="message-container">
                    <List id="messages" />
                </div>
                <Divider classes={{ root: classes.divider }} />
                <form id="chat-form" action="">
                    <OutlinedInput
                        id="m"
                        autoComplete="off"
                        className={(classes.root)}
                    />
                </form>
            </div>
        );
    }

}

export default withStyles(styles)(ChatMessage);