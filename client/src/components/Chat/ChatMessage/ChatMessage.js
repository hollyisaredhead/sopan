import React from 'react';
import {
    Paper,
    OutlinedInput,
    withStyles,
    List,
    Divider,
} from "@material-ui/core";

import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import Covid from '../../../assets/images/coronavirus.png';

import auth0Client from "../../../utils/Auth";


const styles = (theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.chat.secondary,
        color: theme.palette.chat.main,
        borderColor: theme.palette.secondary.main,
    },
    container: {
        height: 550,
        width: "15vw",
        overflow: "auto",
        backgroundColor: theme.palette.chat.paper.main,
        color: theme.palette.chat.main,
    },
    listContain: {
        textAlign: "left",
        padding: 10,
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
    title: {
        
    }
});

class Chat extends React.Component {

    componentDidMount = () => {
        var socket = window.io();
        const chatForm = document.getElementById('chat-form');
        const message = document.getElementById('m');
        const messageContainer = document.getElementById('message-container');

        chatForm.addEventListener("submit", sendMessage);

        function sendMessage(e) {
            e.preventDefault();
            if (message.value === "")
                return;

            socket.emit('chat message', message.value);
            message.value = '';
            return false;
        }

        socket.on('chat message', function (msg) {
            let newMessage = document.createElement("li");
            newMessage.innerHTML = `${auth0Client.getProfile().nickname}: ${msg}`;
            document.getElementById("messages").appendChild(newMessage);
            messageContainer.scrollTo(0, document.body.scrollHeight)
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
                <Paper className={(classes.container)} id="message-container" overflow="auto">
                    <List classes={{ root: classes.listContain }} id="messages" />
                </Paper>
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

export default withStyles(styles)(Chat);