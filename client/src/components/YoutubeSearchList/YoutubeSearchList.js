import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class YoutubeSearchList extends React.Component {
    render() {
        return (
            <div>
                <div id="search-results-container">
                    <ul id="search-results">
                        {this.props.results.map(vid => (
                            <ListItem button onClick={this.props.chooseVideo} vid-id={vid.id.videoId} key={vid.id.videoId}>
                                <img id="vid-thumbnail" src={vid.snippet.thumbnails.default.url} alt={vid.snippet.title}></img>
                                <ListItemText primary={vid.snippet.title} />
                            </ListItem>
                        ))}
                    </ul>
                </div>
                <form id="youtube" onSubmit={this.props.handleSubmit}>
                    <input id="search-query"></input>
                    <button id="search">Search</button>
                </form>
            </div >

        );
    }
}

export default YoutubeSearchList;