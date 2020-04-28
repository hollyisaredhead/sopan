import React from "react";
import API from "../../utils/API";
import YoutubeSearchList from "../YoutubeSearchList/YoutubeSearchList.js";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    videoStyling: {
        padding: 10,
        height: 688,
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
});

class Video extends React.Component {

    state = {
        results: []
    };

    componentDidMount = () => {
        this.socket = window.io();

        this.searchQuery = document.getElementById("search-query");

        this.socket.on('video', function (link) {
            const youtubeVid = document.getElementById("youtube");
            youtubeVid.setAttribute('src', link);
        });


    }

    handleSubmit = (e) => {
        e.preventDefault();
        let query = this.searchQuery.value;
        API.youtubeSearch(query).then(res => {
            console.log(res)
            this.setState({ results: res.data.items });
        });
    }


    chooseVideo = (e) => {
        let videoId = e.currentTarget.getAttribute("vid-id");
        this.socket.emit("video", "https://www.youtube.com/embed/" + videoId + "?autoplay=1");
    }



    render() {
        const { classes } = this.props;
        return (
            <Grid id="video" item xs={10} container>
                <Grid item xs={9} overflow="auto">
                    <Paper className={(classes.paper, classes.videoStyling)}>
                        <iframe title="vid" allow="autoplay; fullscreen" id="youtube" width="95%" height="95%"></iframe>
                    </Paper>
                </Grid>
                <Grid item xs={3} id="vidSearch">
                    <Paper className={(classes.paper, classes.videoStyling)}>Search result
                    <YoutubeSearchList
                            handleSubmit={this.handleSubmit}
                            chooseVideo={this.chooseVideo}
                            results={this.state.results} />
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Video);
