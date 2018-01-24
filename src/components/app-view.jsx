import React from 'react';
import {connect} from 'react-redux';
import {TaskView} from './tasks/task-view.jsx';
import './app.css';

export class AppView extends React.Component {
    constructor(props) {
        super(props);
    }

//                <CategoryView categories={this.props.categories}/>

    render() {
        return <div className={"app"}>
            <TaskView tasks={this.props.tasks}/>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        categories: state.categoryReducer.get('categories'),
        tasks: state.categoryReducer.get('activeCategory').tasks
    };
}

export default connect(mapStateToProps)(AppView);
