import React from 'react';
import {
    Dashboard,
    PhotoSizeSelectActual,
    LocationOn,
    Settings,
} from '@material-ui/icons';

import TestHome from 'TestHome';
import TestImageView from 'TestImageView';
import TestMap from 'TestMap';
import AppSettings from './Settings';

const routes = [
    {
        id: 'dashboard',
        path: '/dashboard',
        sidebarName: 'Dashboard',
        icon: <Dashboard />,
        component: TestHome,
    },
    {
        id: 'image-view',
        path: '/image-view',
        sidebarName: 'Image View',
        icon: <PhotoSizeSelectActual />,
        component: TestImageView,
    },
    {
        id: 'map',
        path: '/map',
        sidebarName: 'Map',
        icon: <LocationOn />,
        component: TestMap,
    },
    {
        id: 'settings',
        path: '/settings',
        sidebarName: 'Settings',
        icon: <Settings />,
        component: AppSettings,
    },
];

export default routes;
