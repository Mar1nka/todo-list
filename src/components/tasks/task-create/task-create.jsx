import React from 'react';

export default class TaskCreate extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(event) {
        event.preventDefault();

        const taskTitle = this.refs.taskInput.value.trim();

        if (taskTitle !== "") {
            this.refs.taskInput.value ="";
            return this.props.addTask(taskTitle);
        }
    }

    render() {
        return <form>
            <input ref="taskInput" placeholder="Text input with button" />
            <button onClick = {this.onClick.bind(this)}>Add</button>
        </form>
    }
};
