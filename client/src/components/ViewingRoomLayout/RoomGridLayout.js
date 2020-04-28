import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


import VolumeSlider from '../../components/Volume/Volume';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';


import ChatInput from '../../components/Chat/ChatInput/ChatInput';
import ChatMessage from '../../components/Chat/ChatMessage/ChatMessage';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';

import Video from '../../components/Video/Video';
import VideoSearchList from '../../components/YoutubeSearchList/YoutubeSearchList';

import GroupAvatars from '../../components/Avatar/AvatarGroup';
import YoutubeSearchList from '../../components/YoutubeSearchList/YoutubeSearchList';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    videoHeight: {
        height: 688
    },
    videoStyling: {
        overflow: "auto"
    },
    videoControlHeight: {
        height: 200
    },
    chatHeight: {
        height: 688
    },
    chatTextarea: {
        width: 100
    },
    chatTextHeight: {
        height: 75
    },
}));

export default function RoomLayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid id="top-row" container spacing={0}>

                <Video />


                <Grid id="chat-container" container item xs={2}>
                    <Paper className={(classes.paper, classes.chatHeight)}>
                        <ChatHeader />
                        <ChatMessage />

                        <Divider />
                        <ChatInput />
                    </Paper>
                </Grid>

                <Grid id="video-control" xs={12}>
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
                </Grid>

            </Grid>
        </div >
    );
}
