import React from 'react'
import {
    Dashboard,
    PhotoSizeSelectActual,
    LocationOn,
} from '@material-ui/icons'

import TestComponent from 'TestComponent'

const routes = [
    {
        id: 'dashboard',
        path: '/',
        sidebarName: 'Dashboard',
        icon: <Dashboard />,
        component: TestComponent,
    },
    {
        id: 'image-view',
        path: '/image-view',
        sidebarName: 'Image View',
        icon: <PhotoSizeSelectActual />,
        component: TestComponent,
    },
    {
        id: 'map',
        path: '/map',
        sidebarName: 'Map',
        icon: <LocationOn />,
        component: TestComponent,
    },
]

export default routes
