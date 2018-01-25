import React from 'react';
import TaskItem from '../task-item/task-item.jsx';


export default class TasksList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('tasks', this.props.tasks)
        return <div>
            {this.props.tasks.map((task, index) =>
                {return <TaskItem key={index} item={task}
                />}
            )}
        </div>
    }
}
