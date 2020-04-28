import React from "react";
import API from "../../utils/API";
import YoutubeSearchList from "../YoutubeSearchList/YoutubeSearchList.js";

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
        return (
            <div>
                <iframe title="vid" allow="autoplay; fullscreen" id="youtube" width="560" height="315"></iframe>

                <YoutubeSearchList
                    handleSubmit={this.handleSubmit}
                    chooseVideo={this.chooseVideo}
                    results={this.state.results} />
            </div>
        )
    }
}

export default Video;