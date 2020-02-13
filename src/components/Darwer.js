import React from 'react';
import { Drawer, ListItem, ListItemIcon,ListItemText } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { List } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function AppDrawer() {


    return (
        <Drawer anchor="left" open="true">
            <div>

                Hi......................
                <Divider />
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Log out
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}

export default AppDrawer;