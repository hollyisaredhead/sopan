import React from "react";
import {
    Grid,
    Paper,
    withStyles,
    Typography,
    CardHeader,
} from '@material-ui/core';
import API from "../../utils/API";
import YoutubeSearchList from "../YoutubeSearchList/YoutubeSearchList.js";


const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.paper.main,
    },
    videoStyling: {
        paddingTop: 20,
        height: "70vh",
        overflow: "auto",
        position: "relative",
        border: "solid 1px",
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.video.main,
    },
    // videoSearch: {
    //     height: 685,
    //     overflow: "auto",
    // },
    // videoControlHeight: {
    //     height: 200
    // },
    searchContainer: {
        height: "61vh",
        overflow: "auto",
        position: "center",
        border: "solid 1px",
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.video.main,
    },
    header: {

        backgroundColor: theme.palette.chat.paper.main,
        color: theme.palette.chat.main,
        borderColor: theme.palette.primary.main,
        border: "solid 1px",
    },
    title: {
        backgroundColor: "white"
    }
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
            <Grid id="video" height={100} item xs={10} spacing={1} container>
                <Grid item xs={9} overflow="auto" >
                    <Paper className={(classes.videoStyling)}>
                        <iframe title="vid" allow="autoplay; fullscreen" id="youtube" width="95%" height="95%"></iframe>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3} id="vidSearch">
                    <Paper className={(classes.paper)}>
                        <CardHeader className={classes.header}
                            title={
                                <Typography variant="h6" component="h6">
                                    Search
                                    <form id="youtube" onSubmit={this.handleSubmit}>
                                        <input id="search-query"></input>
                                        <button id="search">SEARCH</button>
                                    </form>
                                </Typography>
                            }
                        />

                    </Paper>
                    <Paper className={(classes.paper, classes.searchContainer)}>
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
