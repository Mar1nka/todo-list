import React from 'react';

export default class TaskItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"task-item"}>
            <button className={"task-item__button--completed"}  onClick={() => this.props.setCopmletedTask(this.props.item)}>is completed</button>
            <span className={"task-item__title"}>{this.props.item.title}</span>
            <button className={"task-item__button--rename"} onClick={() => this.props.renameTask(this.props.item)}>rename</button>

        </div>
    }
};
