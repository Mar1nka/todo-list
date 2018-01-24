import React from 'react';
import {addTask} from '../../../actions/task-actions.jsx';
import {connect} from 'react-redux';

class TaskCreate extends React.Component {
    constructor(props) {
        super(props);
        this.createTask = this.createTask.bind(this);
    }

    createTask(event) {
        event.preventDefault();

        const taskTitle = this.refs.taskInput.value.trim();

        if (taskTitle !== "") {
            this.refs.taskInput.value ="";
            const task = {title: taskTitle};
            const action = addTask(task);

            this.props.dispatch(action);
        }
    }

    render() {
        return <form>
            <input ref="taskInput" placeholder="Text input with button" />
            <button onClick = {this.createTask}>Add</button>
        </form>
    }
}

export default connect()(TaskCreate);
