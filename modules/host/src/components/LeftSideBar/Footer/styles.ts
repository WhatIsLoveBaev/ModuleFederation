import { makeStyles, Theme } from '@material-ui/core';


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: 'auto',
        '& footer': {
            textAlign: 'right',
            marginLeft: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(9) + 1,
            },
            marginRight: theme.spacing(2),
            padding: theme.spacing(1),
        },
    },
}));