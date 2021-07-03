import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';

import { APP_LOCATION } from './paths';


const Home = lazy(() => import('../components/Home'));
const News = lazy(() => import('../components/News'));
const Info = lazy(() => import('../components/Info'));


export const root: RouteConfig = {
    path: APP_LOCATION.root,
    exact: true,
    component: Home,
};
export const news: RouteConfig = {
    path: APP_LOCATION.news,
    exact: true,
    component: News,
};
export const info: RouteConfig = {
    path: APP_LOCATION.info,
    exact: true,
    component: Info,
};

export const routes: RouteConfig[] = [
    root,
    news,
    info,
];