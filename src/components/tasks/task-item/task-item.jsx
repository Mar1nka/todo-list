import React from 'react';

export default class TaskItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"task-item"}>
            <input type={"checkbox"} checked={this.props.item.isCompleted} className={"task-item__button--completed"}  onChange={() => this.props.setCompletedTask(this.props.item)} />
            <span className={"task-item__title"}>{this.props.item.title}</span>
            <button className={"task-item__button--rename"} onClick={() => this.props.renameTask(this.props.item)}>rename</button>

        </div>
    }
};
