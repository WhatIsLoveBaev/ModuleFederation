import React, { useMemo, ReactNode } from 'react';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';

import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';
import { commonTheme } from './commonTheme';


interface IProps {
    themeType?: 'light' | 'dark';
    children: ReactNode;
}

export const MuiThemeProvider = ({
    themeType = 'light',
    children,
}: IProps) => {
    const themeMapping = {
        light: lightTheme,
        dark: darkTheme,
    };
    const currentTheme = themeMapping[themeType];
    const theme = useMemo(() => createMuiTheme({
        ...commonTheme,
        ...currentTheme,
        palette: {
            ...commonTheme.palette,
            ...currentTheme.palette,
        },
        overrides: {

        },
    }), [themeType]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};