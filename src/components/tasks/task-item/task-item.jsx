import React from 'react';
import {setCompletedTask, renameTask} from '../../../actions/task-actions.jsx';
import {connect} from 'react-redux';


class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.changeTaskComplete = this.changeTaskComplete.bind(this);
    }


    changeTaskComplete () {
        const action = setCompletedTask(this.props.item);
        this.props.dispatch(action);
    }

    render() {
        return <div className={"task-item"}>
            <input type={"checkbox"} checked={this.props.item.isCompleted} className={"task-item__button--completed"}  onChange={this.changeTaskComplete} />
            <span className={"task-item__title"}>{this.props.item.title}</span>
            <button className={"task-item__button--rename"} onClick={() => renameTask(this.props.item)}>rename</button>

        </div>
    }
}

export default connect()(TaskItem);
