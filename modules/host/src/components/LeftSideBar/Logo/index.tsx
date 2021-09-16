import React from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import { Box } from '@material-ui/core';

import { useStyles } from './styles';


export const Logo = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            LOGO
            <AppleIcon />
        </Box>
    );
};