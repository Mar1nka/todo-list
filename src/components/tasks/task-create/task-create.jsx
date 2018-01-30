import React from 'react';
import {addTask} from '../../../actions/task-actions.jsx';
import {connect} from 'react-redux';
import Task from '../../../models/task';
import './task-create.css';

class TaskCreate extends React.Component {
    constructor(props) {
        super(props);
        this.createTask = this.createTask.bind(this);
    }

    createTask(event) {
        event.preventDefault();

        const taskTitle = this.refs.taskInput.value.trim();

        if (taskTitle !== "") {
            this.refs.taskInput.value = "";

            const task = new Task({
                title: taskTitle,
                categoryId: this.props.activeCategoryId
            });

            const action = addTask(task);

            this.props.dispatch(action);
        }
    }

    render() {
        return <form className={"task-create-form"}>
            <input ref="taskInput" placeholder="Enter task title" />
            <button className={"task-create-form__button-add"} onClick={this.createTask}>Add</button>
        </form>
    }
}

export default connect()(TaskCreate);
