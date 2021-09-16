import { makeStyles, Theme } from '@material-ui/core';


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(0.5),
        '& svg': {
            marginTop: theme.spacing(-1),
        }
    }
}));