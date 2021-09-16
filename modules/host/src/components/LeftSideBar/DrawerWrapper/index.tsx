import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { ClickAwayListener, Drawer } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './styles';


interface IProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}

export const DrawerWrapper = ({ setOpen, open, children }: IProps) => {
    const classes = useStyles();
    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Drawer
                variant='permanent'
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                {children}
            </Drawer>
        </ClickAwayListener>
    );
};