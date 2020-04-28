import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import VolumeSlider from '../../components/Volume/Volume';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';


import ChatInput from '../../components/Chat/ChatInput/ChatInput';
import ChatMessage from '../../components/Chat/ChatMessage/ChatMessage';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';

import GroupAvatars from '../../components/Avatar/AvatarGroup';

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
    videoControlHeight: {
        height: 200
    },
    chatHeight: {
        height: 625
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
            <Grid id="top-row" height="100%" container spacing={0}>
                <Grid id="video" height="80%" item xs={10}>
                    <Paper className={(classes.paper, classes.videoHeight)}>Video
                        <Grid>This is where the main video will go</Grid>
                    </Paper>
                    <Grid id="video-control">
                        <Paper className={(classes.paper, classes.videoControlHeight)}>
                            <Grid height="20%" id="volume-screen">Volume and fullscreen controls
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
                <Grid id="chat-container" item xs={2}>
                    <Paper className={(classes.paper, classes.chatHeight)}>
                        <ChatHeader />
                        <ChatMessage />
                    </Paper>
                    <Grid id="chatText-container">
                        <Paper className={(classes.paper, classes.chatTextHeight)}>
                            <ChatInput />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
