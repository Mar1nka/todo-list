import React from 'react';
import {connect} from 'react-redux';
import TaskCreate from './task-create/task-create.jsx';
import TasksList from './tasks-list/tasks-list.jsx';
import './tasks.css';

export class TaskView extends React.Component {

    render() {
        return <div className={"tasks"}>
            <TaskCreate />
            <TasksList {...this.props} />
        </div>
    }
}


