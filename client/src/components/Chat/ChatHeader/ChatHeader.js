import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ChatHeader() {
    const classes = useStyles();


    return (
        <CardHeader
            avatar={
                <Avatar aria-label="Current Room" className={classes.avatar}>SP</Avatar>
            }
            title="Chat"
            subheader="filling text to see the placement"
        />

    );
}