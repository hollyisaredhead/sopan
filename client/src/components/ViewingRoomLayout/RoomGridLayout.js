import React, { useEffect, useState } from 'react';
import {
    makeStyles,
    Paper,
    Grid,
    Box,
    Typography,
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';

import API from "../../utils/API";
import Chat from '../Chat/Chat';
import Video from '../../components/Video/Video';
import auth0Client from "../../utils/Auth";

const useStyles = makeStyles((theme) => ({
    root: {
        // minHeight: "100vh",
        // maxHeight: "100%",
        // width: "100%",
        height: "105vh",
        flexGrow: 1,
        backgroundColor: theme.palette.paper.main
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    // container: {
    //     marginLeft: 5,
    // },
    videoControlHeight: {
        height: 100,
        width: "99%",
        border: "solid 1px",
        backgroundColor: theme.palette.video.main,
        borderColor: theme.palette.primary.main,
    },
    wrapper: {
        backgroundColor: theme.palette.paper.main,
    },
    chatContainer: {
        backgroundColor: theme.palette.video.main,
        position: "relative",
        border: "solid 1px",
        borderColor: theme.palette.primary.main,
    },
    avatarGroup: {
        justifyContent: "center",
    },
    avatarText: {
        paddingBottom: 10,
        color: theme.palette.chat.main,
    },
}));

const socket = window.io();

socket.on('video', function (link) {
    const youtubeVid = document.getElementById("youtube");
    youtubeVid.setAttribute('src', link);
});

socket.on('chat message', function (msg, user) {
    let newMessage = document.createElement("li");
    newMessage.innerText = `${user}: ${msg}`;
    document.getElementById("messages").appendChild(newMessage);
});


var user = {};

export default function RoomLayout(props) {
    const room = window.location.pathname.slice(13)


    const classes = useStyles();

    const [avatars, setAvatars] = useState([]);

    const chooseVideo = (e) => {
        let videoId = e.currentTarget.getAttribute("vid-id");
        socket.emit("video", "https://www.youtube.com/embed/" + videoId + "?autoplay=1", room);
    }

    const sendMessage = (e) => {
        e.preventDefault();
        const message = document.getElementById('m');
        const messageContainer = document.getElementById('message-container');

        if (message.value === "")
            return;

        socket.emit('chat message', message.value, user.nickname, room);
        messageContainer.scrollTo(0, document.body.scrollHeight)
        messageContainer.scrollTop = messageContainer.scrollHeight;
        message.value = '';
        return false;
    }

    useEffect(() => {
        props.setRoom(room);

        socket.emit('join room', room);

        API.getUser(auth0Client.getProfile().email)
            .then(result => {
                if (!result.data) {
                    user = {
                        avatar: auth0Client.getProfile().picture,
                        nickname: auth0Client.getProfile().nickname,
                        email: auth0Client.getProfile().email,
                        room: room
                    }
                    socket.emit('new user', user.avatar, user.nickname, user.email, user.room);
                }
                else {
                    user = {
                        avatar: result.data.avatar,
                        nickname: result.data.nickname,
                        email: result.data.email,
                        room: room
                    };
                    socket.emit('new user', user.avatar, user.nickname, user.email, user.room);
                }
            })
            .catch(err => console.log(err));




        socket.on('new user', function (currentUsers) {
            updateUsers(currentUsers);
        })

        socket.on('update users', function (currentUsers) {
            updateUsers(currentUsers);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateUsers = (currentUsers) => {
        let currentAvatars = [];

        currentUsers.forEach(user => {
            if (user.room === room)
                currentAvatars.push(user.avatar)
        });
        setAvatars(currentAvatars);
    }
    return (
        <div className={classes.root}>
            <Grid id="top-row" container className={classes.container} spacing={1}>
                <Video chooseVideo={chooseVideo} />
                <Grid id="chat-container" container item xs={8} md={2}>
                    <Paper className={(classes.chatContainer)}>
                        <Chat sendMessage={sendMessage} />
                    </Paper>
                </Grid>

                <Grid id="video-control" xs={12}>
                    <Paper className={(classes.paper, classes.videoControlHeight)}>
                        <Grid id="groupInRoom">
                            <Typography className={classes.avatarText}>Who is in the Room</Typography>
                            <Box >
                                {/* <GroupAvatars currentUsers={currentUsers} /> */}
                                <AvatarGroup className={classes.avatarGroup} id="userAvatars" max={15} avatars={avatars}>
                                    {avatars.map(avatar => (
                                        <Avatar alt="" src={avatar} />
                                    ))}
                                </AvatarGroup>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}