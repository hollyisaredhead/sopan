import React from "react";
import {
    Grid,
    AppBar,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    IconButton,
    withStyles,
    Typography,
} from "@material-ui/core";

import PersonIcon from '@material-ui/icons/Person';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Avatar from '@material-ui/core/Avatar';

import auth0Client from "../../utils/Auth";
import API from "../../utils/API";


const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    homeLink: {
        textDecoration: "none",
        color: theme.palette.primary.main,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    menuItem: {
        backgroundColor: theme.palette.signUp.paper.main,
        color: theme.palette.signUp.paper.secondary,

    },
    toolBar: {
        minHeight: "7vh",
        maxHeight: "7vh",
        backgroundColor: theme.palette.paper.main,
    },
    color: {
        color: "#f57c00",
    },
});

class AppBarHs extends React.Component {
    state = {
        anchorEl: null
    };


    // handle opening and closing of dropdown
    handleClick = (event) => {
        // setAnchorEl(event.currentTarget);
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        // setAnchorEl(null);
        this.setState({ anchorEl: null });
    };

    signOut = () => {
        auth0Client.signOut();
    };

    goToProfile = () => {
        window.location.href = "/profile";
    }

    render() {
        const { classes } = this.props;

        let avatarIcon;
        if (this.props.user) {
            avatarIcon = <Avatar alt={this.props.user.nickname} src={this.props.user.avatar} />
        }
        else {
            avatarIcon = <PersonIcon />
        }

        return (
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar className={classes.toolBar}>
                        <Grid
                            justify="space-between"
                            container
                            spacing={24}
                        >
                            <IconButton onClick={this.props.toggleTheme} color="primary">
                                <Brightness3Icon />
                            </IconButton>
                            <Button
                                color="secondary"
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={this.handleClick}
                            >
                                {
                                    !auth0Client.isAuthenticated() &&
                                    <PersonIcon />
                                }
                                {
                                    auth0Client.isAuthenticated() &&
                                    avatarIcon
                                }

                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}
                            >
                                {/* <MenuItem
                                    className={classes.menuItem}
                                    onClick={this.handleClose}
                                >
                                    Create New Room
                </MenuItem> */}
                                {
                                    auth0Client.isAuthenticated() &&
                                    <MenuItem
                                        className={classes.menuItem}
                                        onClick={this.goToProfile}
                                    >
                                        Profile
                                    </MenuItem>
                                }

                                {
                                    !auth0Client.isAuthenticated() &&

                                    <MenuItem
                                        className={classes.menuItem}
                                        onClick={auth0Client.signIn}
                                    >
                                        <Typography>Login</Typography>
                                    </MenuItem>
                                }
                                {
                                    auth0Client.isAuthenticated() &&
                                    <MenuItem
                                        className={classes.menuItem}
                                        onClick={() => { this.signOut() }}
                                    >
                                        <Typography>Logout</Typography>
                                    </MenuItem>
                                }
                            </Menu>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};

export default withStyles(styles)(AppBarHs);
