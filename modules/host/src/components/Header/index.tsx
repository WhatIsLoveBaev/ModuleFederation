import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { APP_LOCATION } from '../../routes/paths';


export const Header = () => {
    
    return (
        <Grid container justify='center'>
            <Link to={APP_LOCATION.root}>
                пупа и лупа
            </Link>
            <Link to={APP_LOCATION.news}>
                <Button variant='outlined' color='primary'>
                    Новости
                </Button>
            </Link>
            <Link to={APP_LOCATION.info}>
                <Button variant='outlined' color='primary'>
                    Информация
                </Button>
            </Link>
        </Grid>
    );
};