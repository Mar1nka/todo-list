import React from 'react';
import {cleanTaskEdit} from '../../actions/task-edit-action.jsx';
import {editTask} from '../../actions/task-actions.jsx';
import {connect} from 'react-redux';
import './task-edit.css';

 class TaskEdit extends React.Component {
    constructor(props) {
        super(props);

        this.saveChanges = this.saveChanges.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    saveChanges() {
        let isCompleted = false;

        if(this.refs.checkboxIsCompleted.value === "on") {
            isCompleted = true;
        }

        const taskEdit = {
            id: this.props.taskEdit.id,
            categoryId: this.props.taskEdit.categoryId,
            title: this.refs.titleInput.value.trim(),
            description: this.refs.descriptionTextArea.value.trim(),
            isCompleted: isCompleted
        }



        const action = editTask(taskEdit);
        this.props.dispatch(action);


        this.cancel();
    }

    cancel() {
        const taskEdit = {
          id: null
        };

        const action = cleanTaskEdit(taskEdit);
        this.props.dispatch(action);
    }

    render() {
        return <div className={"task-edit"}>
            <div className={"task-edit__buttons"}>
                <button className={"task-edit__save-button"} onClick={this.saveChanges}>Save changes</button>
                <button className={"task-edit__cancel-button"} onClick={this.cancel}>Cancel</button>
            </div>
            <input className={"task-edit__label"} ref="titleInput" defaultValue={this.props.taskEdit.title} />
            <div className={"task-edit__completedTask"}>
                <input className={"completedTask__checkbox"} ref={"checkboxIsCompleted"} type={"checkbox"}
                       id="task-edit-completed" defaultChecked={this.props.taskEdit.isCompleted}
                />
                <label htmlFor="task-edit-completed">Done</label>
            </div>
            <textarea className={"task-edit__description"} ref={"descriptionTextArea"} name="text" rows={"20"}
                      placeholder={"Description"} defaultValue={this.props.taskEdit.description}/>
        </div>
    }
}

export default connect()(TaskEdit);
