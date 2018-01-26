import React from 'react';
import {connect} from 'react-redux';
import {TaskView} from './tasks/task-view.jsx';
import {CategoryView} from './categories/category-view.jsx';
import './app.css';

export class AppView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"app"}>
            <CategoryView allCategories={this.props.categories} activeCategoryId={this.props.activeCategoryId} />
            <TaskView tasks={this.props.tasks} activeCategoryId={this.props.activeCategoryId}/>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        categories: state.categoryReducer.categories,
        activeCategoryId: state.categoryReducer.activeCategoryId,
        tasks: state.taskReducer.filter(task => task.categoryId === state.categoryReducer.activeCategoryId),
    };
}

export default connect(mapStateToProps)(AppView);
