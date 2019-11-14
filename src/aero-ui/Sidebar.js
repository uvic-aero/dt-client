import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import List from '@material-ui/core/List';

const Sidebar = ({
    routes,
    open,
    drawerPaper,
    drawerPaperClose,
    toolbarIcon,
    handleDrawerClose,
}) => {
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(drawerPaper, !open && drawerPaperClose),
            }}
            open={open}
        >
            <div className={toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeft />
                </IconButton>
            </div>
            <Divider />
            <List>
                {routes.map(route => (
                    <Link
                        to={route.path}
                        style={{ textDecoration: 'none', color: '#0000008a' }}
                        key={route.id}
                    >
                        <ListItem button>
                            <ListItemIcon>{route.icon}</ListItemIcon>
                            <ListItemText primary={route.sidebarName} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
};

Sidebar.propTypes = {
    routes: PropTypes.instanceOf(Array).isRequired,
    open: PropTypes.bool.isRequired,
    drawerPaper: PropTypes.string.isRequired,
    drawerPaperClose: PropTypes.string.isRequired,
    toolbarIcon: PropTypes.string.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
};

export default withRouter(Sidebar);
