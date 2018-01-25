import React from 'react';
import {connect} from 'react-redux';
import TaskCreate from './task-create/task-create.jsx';
import TasksList from './tasks-list/tasks-list.jsx';
import './tasks.css';

export class TaskView extends React.Component {

    render() {
        if(this.props.activeCategoryId) {
            return <div className={"tasks"}>
                <TaskCreate activeCategoryId={this.props.activeCategoryId}/>
                <TasksList {...this.props} />
            </div>
        } else {
            return <div className={"tasks"}/>;
        }
    }
}


