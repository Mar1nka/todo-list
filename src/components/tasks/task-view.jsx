import React from 'react';
import {connect} from 'react-redux';
import TaskCreate from './task-create/task-create.jsx';
import TasksList from './tasks-list/tasks-list.jsx';

export class TaskView extends React.Component {

    render() {
        return <div>
            <TaskCreate />
            <TasksList {...this.props} />
        </div>
    }
}


