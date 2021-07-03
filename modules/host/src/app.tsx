import React from 'react';
import { makeStyles } from '@material-ui/core';
import { renderRoutes } from 'react-router-config';

import { RootLayout } from './components/RootLayout';
import { Header } from './components/Header';
import { routes } from './routes';


export const HostRoot = () => {
    return (
        <RootLayout>
            <Header />
            {renderRoutes(routes)}
        </RootLayout>
    );
};