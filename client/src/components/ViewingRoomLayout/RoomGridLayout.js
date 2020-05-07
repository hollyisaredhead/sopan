import React, { useEffect } from 'react';
import {
    makeStyles,
    Paper,
    Grid,
} from '@material-ui/core';

// import VolumeSlider from '../../components/Volume/Volume';
// import FullscreenIcon from '@material-ui/icons/Fullscreen';
// import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
// import GroupAvatars from '../../components/Avatar/AvatarGroup';
// import { Divider } from '@material-ui/core';

import Chat from '../Chat/Chat';
import Video from '../../components/Video/Video';
import auth0Client from "../../utils/Auth";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        maxHeight: "100%",
        width: "100%",
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
    wrapper: {
        backgroundColor: theme.palette.paper.main,
    },
    chatContainer: {
        // height: "71vh",
        backgroundColor: theme.palette.video.main,
        position: "relative",
        border: "solid 1px",
        borderColor: theme.palette.primary.main,
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




export default function RoomLayout() {

    const classes = useStyles();

    const chooseVideo = (e) => {
        let videoId = e.currentTarget.getAttribute("vid-id");
        socket.emit("video", "https://www.youtube.com/embed/" + videoId + "?autoplay=1");
    }

    const sendMessage = (e) => {
        e.preventDefault();
        const message = document.getElementById('m');
        const messageContainer = document.getElementById('message-container');

        if (message.value === "")
            return;

        socket.emit('chat message', message.value, auth0Client.getProfile().nickname);
        messageContainer.scrollTo(0, document.body.scrollHeight)
        messageContainer.scrollTop = messageContainer.scrollHeight;
        message.value = '';
        return false;
    }



    useEffect(() => {
        socket.emit('new user', auth0Client.getProfile().nickname);

        socket.on('new user', function (currentUsers) {
            updateUsers(currentUsers);
        })

        socket.on('update users', function (currentUsers) {
            updateUsers(currentUsers);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateUsers = (currentUsers) => {
        const userDiv = document.getElementById("users")

        let userString = "";
        currentUsers.forEach(user => userString += `<p>${user.name}</p>`);
        userDiv.innerHTML = userString;

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

                {/* <Grid id="video-control" xs={12}>
                    <Paper className={(classes.paper, classes.videoControlHeight)}>
                        <Grid id="volume-screen">Volume and fullscreen controls
                            <div style={{ width: '100%' }}>
                                <Box display="flex" p={1} bgcolor="background.paper">
                                    <Box p={1} flexGrow={1} >
                                        <VolumeSlider />
                                    </Box>
                                    <Box p={1} >
                                        <FullscreenIcon />
                                    </Box>
                                    <Box p={1} >
                                        <FullscreenExitIcon />
                                    </Box>
                                </Box>
                            </div>
                        </Grid>
                        <Grid id="groupInRoom">Who is in the Room
                            <Box >
                                <GroupAvatars />
                            </Box>
                        </Grid>
                    </Paper>
                </Grid> */}

            </Grid>
            <div id="users">
            </div>


        </div >
    );
}