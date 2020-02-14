import React from 'react';
import { Task } from './Task'
import { GridList, GridListTile } from '@material-ui/core';

import Data from './Data';

export class TaskList extends React.Component {

    TaskList = () => {
        const tasks = Data.map((task, i) =>
            <GridListTile key={i}>
                <Task 
                    description={task.description} 
                    status={task.status} 
                    resposible={task.responsible}
                    dueDate={task.dueDate} />
            </GridListTile>
        )
        return tasks;
    }

    render() {
        let tasks = this.TaskList();
        return (
            <GridList cols={1}>
                {tasks}
            </GridList>
        )
    }
}

