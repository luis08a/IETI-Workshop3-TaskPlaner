import React from 'react';
import { Card, CardActions, CardContent, Button, IconButton } from '@material-ui/core';

export class Task extends React.Component {

    render() {
        console.log(this.props.responsible);
        
        return (
            <Card variant="outlined">
                <CardContent>
                    {this.props.description}
                    <br/>
                    {this.props.status} - {this.props.dueDate}
                    <br/>
                    {/* {this.props.responsible.name}
                    {this.props.responsible.email} */}
                </CardContent>
                <CardActions>
                    <IconButton size="small">Learn More</IconButton>
                </CardActions>
            </Card>
        );
    }
}
