import React from 'react';
import {
    Paper,
    OutlinedInput,
    withStyles,
    List,
    Divider,
    CardHeader,
    Avatar,
} from "@material-ui/core";

import { deepOrange } from '@material-ui/core/colors';
import Covid from '../../assets/images/coronavirus.png';

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
                <form id="chat-form" action="" onSubmit={this.props.sendMessage}>
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