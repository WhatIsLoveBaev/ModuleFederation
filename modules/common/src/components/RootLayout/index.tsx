import React, { ReactNode, useContext } from 'react';
import { MuiThemeProvider, ThemeContext } from 'theme';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import { WithCurrentTheme } from './WithCurrentTheme';


interface IProps {
    children: ReactNode;
}


export const RootLayout = WithCurrentTheme(({ children }: IProps) => {
    const { themeType } = useContext(ThemeContext);
    return (
        <BrowserRouter>
            <MuiThemeProvider themeType={themeType}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </BrowserRouter>
    );
});
