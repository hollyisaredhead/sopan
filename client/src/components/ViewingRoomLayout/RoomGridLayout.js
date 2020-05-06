import React from 'react';
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

export default function RoomLayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid id="top-row" container className={classes.container} spacing={1}>
                <Video />
                <Grid id="chat-container" container item xs={8} md={2}>
                    <Paper className={(classes.chatContainer)}>
                        <Chat />
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
        </div >
    );
}