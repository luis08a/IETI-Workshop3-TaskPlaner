import React from 'react';
import { Drawer, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { List } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, CardActions, CardMedia, CardContent } from '@material-ui/core';
import { getThemeProps } from '@material-ui/styles';

function AppDrawer(props) {

    const card = () => {
        return (
            <Card >
                <CardActionArea>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="User image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
              </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
              </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
            </Button>
                    <Button size="small" color="primary">
                        Learn More
            </Button>
                </CardActions>
            </Card>
        )
    }


    return (
        <Drawer anchor="left" open={props.open} onClose={props.close}>
            <div>
                {card()}
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