import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/task-actions.jsx';
import TaskCreate from './task-create/task-create.jsx';
import TasksList from './tasks-list/tasks-list.jsx';

class TaskView extends React.Component {

    render() {
        return <div>
            <TaskCreate addTask={this.props.addTask}/>
            <TasksList {...this.props} />
        </div>
    }
}

function mapStateToProps(state) {
    //let tasks = state.get("tasks");
    //console.log('tasks', tasks);
    return {
        tasks: state.get("tasks")
    };
}

const connectedTaskView = connect(mapStateToProps, actions)(TaskView);

export {connectedTaskView as TaskView}
