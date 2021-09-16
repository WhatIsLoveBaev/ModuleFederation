import { makeStyles } from '@material-ui/core';


export const useStylesFirst = makeStyles(() => ({
    root: {
        backgroundColor: 'red',
        width: '300px',
        height: '300px'
    }
}));

export const useStylesSecond = makeStyles(() => ({
    root: {
        backgroundColor: 'green',
        width: '500px',
        height: '500px'
    }
}));

export const useConditionalStyles = {
    red: useStylesFirst,
    green: useStylesSecond
};