import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center"
    }
}));

export default function GroupAvatars() {
    const classes = useStyles();

    return (
        <AvatarGroup className={clsx(classes.root)} max={10}>
            <Avatar alt="Remy Sharp" src="" />
            <Avatar alt="Travis Howard" src="" />
            <Avatar alt="Cindy Baker" src="" />
            <Avatar alt="Cindy Baker" src="" />
        </AvatarGroup>
    );
}