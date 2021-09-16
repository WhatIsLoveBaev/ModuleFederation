import { fade, makeStyles, Theme } from '@material-ui/core';

import { desktopDrawerWidth } from '../constants';


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1, 0),
    },
    active: {
        backgroundColor: fade(theme.palette.common.black, 0.1)
    },
    component: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            minWidth: theme.spacing(9) + 1,
        },
    },
    text: {
        cursor: 'default',
        maxWidth: `calc(${desktopDrawerWidth}px - 40%)`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    endComponent: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2)
    },
}));