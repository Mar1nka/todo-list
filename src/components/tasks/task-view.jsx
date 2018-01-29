import React from 'react';
import {connect} from 'react-redux';
import TaskCreate from './task-create/task-create.jsx';
import TasksList from './tasks-list/tasks-list.jsx';
import TaskEdit from './task-edit/task-edit.jsx'
import './tasks.css';

export class TaskView extends React.Component {

    render() {
        if(this.props.activeCategoryId) {
            if (this.props.editTask) {
                return <div className={"tasks"}>
                    <TaskEdit editTask={this.props.editTask}/>
                </div>
            } else {
                return <div className={"tasks"}>
                    <TaskCreate activeCategoryId={this.props.activeCategoryId}/>
                    < TasksList {...this.props} />
                </div>
            }
        } else {
            return <div className={"tasks"}/>;
        }
    }
}


