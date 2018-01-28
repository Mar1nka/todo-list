import React from 'react';
import TaskItem from '../task-item/task-item.jsx';
import './task-list.css'


export default class TasksList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className={"task-list"}>
            {this.props.tasks.map((task, index) =>
                {return <TaskItem key={index} item={task}
                />}
            )}
        </div>
    }
}
