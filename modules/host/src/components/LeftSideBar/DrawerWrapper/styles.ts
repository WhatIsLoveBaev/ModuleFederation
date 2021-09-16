import { makeStyles, Theme } from '@material-ui/core';

import { desktopDrawerWidth } from '../constants';



export const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        width: desktopDrawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        backgroundColor: theme.palette.common.white,
    },
    drawerOpen: {
        width: desktopDrawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: 0
        },
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
}));