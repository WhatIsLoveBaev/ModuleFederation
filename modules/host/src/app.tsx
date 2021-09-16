import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { RootLayout } from 'common/components';
import { Box } from '@material-ui/core';

import { routes } from './routes';
import { LeftSideBar } from './components/LeftSideBar';


export const HostRoot = () => {
    return (
        <Suspense fallback='root loading...'>
            <RootLayout>
                <Box display='flex'>
                    <LeftSideBar />
                    {renderRoutes(routes)}
                </Box>
            </RootLayout>
        </Suspense>
    );
};