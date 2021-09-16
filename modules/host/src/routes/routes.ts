import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

import { APP_LOCATION } from './paths';


const Home = lazy(() => import('../components/Home'));
const News = lazy(() => import('../components/News'));
const Info = lazy(() => import('../components/Info'));

export enum ROUTE_KEY {
    HOME = 'Главная',
    PROFILE = 'Профиль',
    NEWS = 'Новости',
    INFO = 'Какая то информация',
}

export const ROUTE_ICON = {
    [ROUTE_KEY.HOME]: null,
    [ROUTE_KEY.PROFILE]: PersonIcon,
    [ROUTE_KEY.NEWS]: ChromeReaderModeIcon,
    [ROUTE_KEY.INFO]: InfoIcon,
};


export const root: RouteConfig = {
    path: APP_LOCATION.root,
    exact: true,
    component: Home,
    key: ROUTE_KEY.HOME
};
export const profile: RouteConfig = {
    path: APP_LOCATION.profile,
    exact: true,
    component: Home,
    key: ROUTE_KEY.PROFILE
};
export const news: RouteConfig = {
    path: APP_LOCATION.news,
    exact: true,
    component: News,
    key: ROUTE_KEY.NEWS
};
export const info: RouteConfig = {
    path: APP_LOCATION.info,
    exact: true,
    component: Info,
    key: ROUTE_KEY.INFO
};

export const routes: RouteConfig[] = [
    root,
    profile,
    news,
    info,
];