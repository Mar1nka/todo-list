import React from 'react';
import TaskItem from '../task-item/task-item.jsx';

export default class TasksList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            {this.props.tasks.map((task, index) =>
                {return <TaskItem key={index}
                                      item={task}
                                      setCopmletedTask={this.props.setCompletedTask}
                                      renameTask={this.props.renameTask}
                                      // deleteTask={this.props.deleteTask}
                />}
            )}
        </div>
    }
}
