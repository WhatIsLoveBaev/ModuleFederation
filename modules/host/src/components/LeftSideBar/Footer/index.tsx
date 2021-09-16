import React, { Fragment, useContext } from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Box, Divider, IconButton } from '@material-ui/core';
import { THEME_TYPE, ThemeContext } from 'common/theme';

import { useStyles } from './styles';
import { NavItem } from '../NavItem';


export const Footer = () => {
    const { themeType, setThemeType } = useContext(ThemeContext);
    const chooseTheme = themeType === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT;
    const chooseThemeText = themeType === THEME_TYPE.LIGHT ? 'Светлая тема' : 'Темная тема';
    
    const classes = useStyles();
    return (
        <Fragment>
            <Box className={classes.root}>
                <Divider />
                <NavItem
                    ViewComponent={
                        <IconButton onClick={() => setThemeType(chooseTheme)}>
                            <Brightness4Icon />
                        </IconButton>
                    }
                    text={chooseThemeText}
                />
                <Divider />
                <footer>
                    <div>Версия 1.0.0</div>
                </footer>
            </Box>
        </Fragment>
        
    );
};