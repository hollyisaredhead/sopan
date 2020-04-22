import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import LaunchIcon from '@material-ui/icons/Launch';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Create new room" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LaunchIcon />
            </ListItemIcon>
            <ListItemText primary="Join a room" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ height: '30vh' }} />
            </Container>
        </React.Fragment>
    </div>
);