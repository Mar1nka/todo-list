import React from 'react';
import {connect} from 'react-redux';
import {TaskView} from './tasks/task-view.jsx';
import {CategoryView} from './categories/category-view.jsx';
import TaskFilter from './task-filter/task-filter.jsx'
import ProgressBar from './progress-bar/progress-bar.jsx'
import './app.css';
import '../styles/main.css'

export class AppView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"app__content"}>
            <div className={"header"}>
                <div className={"header__title"}>To-Do List</div>
                <TaskFilter isTaskCompleted={this.isTaskCompleted}/>
            </div>
            <div className={"main"}>
                <ProgressBar progressValue={this.props.completeCategoriesPercentage}/>
                <div className={"main__content"}>
                    <CategoryView allCategories={this.props.categories} activeCategoryId={this.props.activeCategoryId}/>
                    <TaskView tasks={this.props.tasks} activeCategoryId={this.props.activeCategoryId}/>
                </div>
            </div>

        </div>
    }
}

function getCompleteCategoriesPercentage(categories, tasks) {
    let completedCategoriesCounter = 0;

    for (const category of categories) {
        let isCategoryCompleted = getIsCategoryCompleted(category, tasks);

        if (isCategoryCompleted) {
            completedCategoriesCounter++;
        }
    }

    const percentage = completedCategoriesCounter / categories.length * 100;

    return percentage;
}

function getIsCategoryCompleted(category, tasks) {
    let isCategoryCompleted = true;

    for (let task of tasks) {
        if (task.categoryId === category.id && task.isCompleted === false) {
            isCategoryCompleted = false;
            break;
        }
    }

    return isCategoryCompleted;
}

function filterTasks(tasks, activeCategoryId, isCompletedTaskFilterEnabled, searchText) {
    const filteredTasks = tasks.filter((task) => {
        let isTaskFiltered = false;

        const isTaskInActiveCategory = task.categoryId === activeCategoryId;
        const isTaskContainsSearchText = task.title.indexOf(searchText) > -1;

        if (isTaskInActiveCategory && isTaskContainsSearchText) {
            isTaskFiltered = true;

            if (isCompletedTaskFilterEnabled === true &&
                task.isCompleted === false) {
                isTaskFiltered = false;
            }
        }
        return isTaskFiltered;
    });

    return filteredTasks;
}


function mapStateToProps(state) {

    const categories = state.categoryReducer.categories;
    const tasks = state.taskReducer;
    const activeCategoryId = state.categoryReducer.activeCategoryId;
    const isCompletedTaskFilterEnabled = state.taskFilterReducer.isCompleted;
    const textSearch = state.taskFilterReducer.textSearch;
    const completeCategoriesPercentage = getCompleteCategoriesPercentage(categories, tasks);

    return {
        'isTaskCompleted': isCompletedTaskFilterEnabled,
        'categories': categories,
        'activeCategoryId': activeCategoryId,
        'tasks': filterTasks(tasks, activeCategoryId, isCompletedTaskFilterEnabled, textSearch),
        'completeCategoriesPercentage': completeCategoriesPercentage
    };
}

export default connect(mapStateToProps)(AppView);
