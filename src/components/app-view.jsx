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
            <CategoryView categories={this.props.categories}/>
            <TaskView tasks={this.props.tasks}/>
        </div>
    }
}


function mapStateToProps(state) {
    console.log('mapStateToProps');
    return {
        categories: state.categoryReducer.get('categories'),
        tasks: state.taskReducer.get('tasks')
    };
}

export default connect(mapStateToProps)(AppView);
