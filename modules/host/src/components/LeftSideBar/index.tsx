import React, { useState } from 'react';
import {
    Box,
    Divider,
    IconButton,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import { NavItem } from './NavItem';
import { Logo } from './Logo';
import { APP_LOCATION } from '../../routes/paths';
import { Footer } from './Footer';
import { RenderRoutes } from './RenderRoutes';
import { DrawerWrapper } from './DrawerWrapper';



export const LeftSideBar = () => {
    const { replace, location: { pathname } } = useHistory();
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string | null>(
        pathname.split('/').filter(p => p)[0]
    );

    return (
        <DrawerWrapper open={open} setOpen={setOpen}>
            <NavItem
                ViewComponent={
                    <IconButton onClick={() => setOpen(!open)}>
                        <MenuIcon />
                    </IconButton>
                }
                EndViewComponent={
                    <Box onClick={() => {
                        setOpen(false);
                        replace(APP_LOCATION.root);
                        setActive(null);
                    }}>
                        <Logo />
                    </Box>
                }
            />
            <Divider />
            <RenderRoutes
                active={active}
                setActive={setActive}
                setOpen={setOpen}
            />
            <Footer />
        </DrawerWrapper>
    );
};