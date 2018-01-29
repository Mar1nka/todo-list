import React from 'react';
import {setCompletedTask} from '../../../actions/task-actions.jsx';
import {setEditTask} from '../../../actions/task-edit-action.jsx';
import {connect} from 'react-redux';
import './task-item.css';


class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.changeTaskComplete = this.changeTaskComplete.bind(this);
        this.editTask = this.editTask.bind(this);
    }


    changeTaskComplete() {
        const action = setCompletedTask(this.props.item);
        this.props.dispatch(action);
    }

    editTask() {
        const action = setEditTask(this.props.item);
        this.props.dispatch(action);
    }

    render() {
        return <div className={"task-item"}>
            <input type={"checkbox"} checked={this.props.item.isCompleted}
                   className={"task-item__complete-checkbox"} onChange={this.changeTaskComplete}/>
            <span className={"task-item__title"}>{this.props.item.title}</span>
            <div className={"task-item__buttons"}>
                <button className={"task-item__rename-button"} onClick={this.editTask}>rename
                </button>
            </div>

        </div>
    }
}

export default connect()(TaskItem);
