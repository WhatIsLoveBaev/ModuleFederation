import React, {
    Dispatch, ReactNode, SetStateAction, Key 
} from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';

import { useStyles } from './styles';


interface IProps {
    id?: Key | string;
    text?: Key | string;
    active?: boolean;
    onShowMore?: Dispatch<SetStateAction<Key | string>>;
    ViewComponent: ReactNode;
    EndViewComponent?: ReactNode;
}

export const NavItem = ({
    id,
    text,
    onShowMore,
    active,
    ViewComponent,
    EndViewComponent,
}: IProps) => {
    const classes = useStyles();

    return (
        <Box className={clsx(classes.root, {
            [classes.active]: active,
        })}>
            <Box className={classes.component}>
                {ViewComponent}
            </Box>
            <Typography className={classes.text} variant='body2'>
                {text}
            </Typography>
            {EndViewComponent ? (
                <Box className={classes.endComponent}>
                    {EndViewComponent}
                </Box>
            ) : (onShowMore && id) && (
                <Box className={classes.endComponent} onClick={() => onShowMore(id)}>
                    <IconButton size='small'>
                        <ChevronRightIcon />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};