import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ImageQueueIcon from '@material-ui/icons/PhotoSizeSelectActual'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const listIcons = [
    { item: <DashboardIcon />, text: 'Dashboard' },
    { item: <ImageQueueIcon />, text: 'Image Queue' },
    { item: <LocationOnIcon />, text: 'Map' },
]

const DrawerItems = listIcons.map(icon => (
    <ListItem button>
        <ListItemIcon>{icon.item}</ListItemIcon>
        <ListItemText primary={icon.text} />
    </ListItem>
))

export default DrawerItems
