import React from 'react';
import { makeStyles }  from '@material-ui/core';


const getStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.dark

    }
}));

export const AppRoot = () => {
    const classes = getStyles();
    return (
        <div className={classes.root} style={{
            width: '100%', height: '100vh', display: 'flex', justifyContent: 'center',
        }}>
            Webpack 1 21
        </div>
    );
};