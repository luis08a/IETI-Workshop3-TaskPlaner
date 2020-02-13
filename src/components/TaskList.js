import React from 'react';
import {Task} from './Task'

export class TaskList extends React.Component{
    constructor(props){
        super(props)
    }

    TaskList = () =>{
        const tasks = this.props.items
        const listTodo = tasks.map((todo,i) =>
            <li key={i}>
               <Task text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            </li>
        )
        return listTodo;
    }

    render(){
        let tasks = this.Task();
        return(
            <ul>
                {tasks}
            </ul>
        )
    }
}