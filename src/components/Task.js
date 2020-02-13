import React from 'react';

export class Task extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.description}</p>
                <p>{this.props.resposible}</p>
                <p>{this.props.status}</p>
                <div>{this.props.dueDate.toString()}</div>
            </div>
        );
    }

}