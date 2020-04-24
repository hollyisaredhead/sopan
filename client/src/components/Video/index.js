import React from "react";

class Video extends React.Component {

    componentDidMount = () => {
        const socket = window.io();

        const youtubeVid = document.getElementById("youtube");
        const videoSearchForm = document.getElementById("video-search");
        const searchInput = document.getElementById("link");

        const getVideo = (e) => {
            e.preventDefault();
            socket.emit('video', searchInput.value);
            searchInput.value = '';
            return false;
        }

        videoSearchForm.addEventListener("submit", getVideo);

        socket.on('video', function (link) {
            youtubeVid.setAttribute('src', link);
        });
    }



    render() {
        return (
            <div>
                <iframe title="vid" id="youtube" autoPlay width="560" height="315"></iframe>
                <form id="video-search">
                    <input id="link" placeholder="Put youtube link here"></input>
                    <button id="search">Watch it!</button>
                </form>
            </div>
        )
    }
}

export default Video;