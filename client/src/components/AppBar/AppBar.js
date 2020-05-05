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
} from "@material-ui/core";

import PersonIcon from '@material-ui/icons/Person';
import Brightness3Icon from '@material-ui/icons/Brightness3';

// import LoginBtn from '../../components/Login/LoginBtn';


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
        backgroundColor: "#333333",
        color: theme.palette.secondary.main,

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
        anchorEl: null,
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

    render() {
        const { classes } = this.props;
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
                                <PersonIcon />
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
                </MenuItem>
                                <MenuItem
                                    className={classes.menuItem}
                                    onClick={this.handleClose}
                                >
                                    Join A Room
                </MenuItem> */}
                                <MenuItem
                                    className={classes.menuItem}
                                    onClick={this.handleClose}
                                >
                                    Logout

                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};

export default withStyles(styles)(AppBarHs);
