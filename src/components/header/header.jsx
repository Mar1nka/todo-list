import React from 'react';
import {connect} from 'react-redux';
import TaskFilter from '../task-filter/task-filter.jsx'
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let headerTitle = <div className={"header__title"}>To-Do List</div>;
        let taskFilter = <TaskFilter isTaskCompleted={this.props.isTaskCompleted}/>;

        if (this.props.editTask) {
            headerTitle = <div className={"header__title"}>To-Do Item {this.props.editTask.title}</div>;
            taskFilter = null;
        }

        return <div className={"header"}>
            {headerTitle}
            {taskFilter}
        </div>
    }
}

export default connect()(Header);
