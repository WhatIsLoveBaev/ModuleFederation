import { Link as DefaultLink } from 'react-router-dom';
import { styled } from '@material-ui/core';


export const Link = styled(DefaultLink)({
    textDecoration: 'none',
    color: 'inherit',
    '&:focus, &:hover, &:visited, &:link, &:active' : {
        textDecoration: 'none',
        color: 'inherit',
    }
});