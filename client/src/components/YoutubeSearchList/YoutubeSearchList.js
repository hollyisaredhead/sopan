import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import './style.css';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
});

class YoutubeSearchList extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div id fixed>
                <form id="youtube" onSubmit={this.props.handleSubmit}>
                    <input id="search-query"></input>
                    <button id="search">SEARCH</button>
                </form>
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
            </div >

        );
    }
}

export default YoutubeSearchList;