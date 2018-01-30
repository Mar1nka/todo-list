import React from 'react';
import {updateTask, setEditTask} from '../../../actions/task-actions.jsx';
import {connect} from 'react-redux';
import './task-edit.css';

 class TaskEdit extends React.Component {
    constructor(props) {
        super(props);

        this.saveChanges = this.saveChanges.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    saveChanges() {
        const task = {
            id: this.props.editTask.id,
            categoryId: this.props.editTask.categoryId,
            title: this.refs.titleInput.value.trim(),
            description: this.refs.descriptionTextArea.value.trim(),
            isCompleted: this.refs.checkboxIsCompleted.checked
        };

        const action = updateTask(task);
        this.props.dispatch(action);

        this.clearEditTask();
    }

     clearEditTask() {
         const action = setEditTask(null);
        this.props.dispatch(action);
    }

     cancel() {
         this.clearEditTask();
     }

    render() {
        return <div className={"task-edit"}>
            <div className={"task-edit__buttons"}>
                <button className={"task-edit__button task-edit__save-button"} onClick={this.saveChanges}>Save changes</button>
                <button className={"task-edit__button task-edit__cancel-button"} onClick={this.cancel}>Cancel</button>
            </div>
            <input className={"task-edit__label"} ref="titleInput" defaultValue={this.props.editTask.title}/>
            <div className={"task-edit__completedTask"}>
                <input className={"completedTask__checkbox"} ref={"checkboxIsCompleted"} type={"checkbox"}
                       id="task-edit-completed" defaultChecked={this.props.editTask.isCompleted}
                />
                <label htmlFor="task-edit-completed">Done</label>
            </div>
            <textarea className={"task-edit__description"} ref={"descriptionTextArea"} name="text" rows={"20"}
                      placeholder={"Description"} defaultValue={this.props.editTask.description}/>
        </div>
    }
}

export default connect()(TaskEdit);
