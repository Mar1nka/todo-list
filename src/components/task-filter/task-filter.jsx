import React from 'react';
import {setSearchText, toggleCompleteFilter} from '../../actions/task-filter-actions';
import {connect} from 'react-redux';
import './task-filter.css';

class TaskFilter extends React.Component {
    constructor(props) {
        super(props);
        this.searchTask = this.searchTask.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.changeCompleteFilter = this.changeCompleteFilter.bind(this);
    }

    changeCompleteFilter() {
        let action = toggleCompleteFilter();
        this.props.dispatch(action);
    }

    searchTask(event) {
        event.preventDefault();

        const searchTaskText = this.refs.searchInput.value.trim();

        if (searchTaskText !== "") {
            const action = setSearchText(searchTaskText);
            this.props.dispatch(action);
        }
    }

    clearSearch() {
        this.refs.searchInput.value = "";
        const action = setSearchText('');
        this.props.dispatch(action);
    }

    render() {
        return <div className={"task-filter"}>
            <div className={"task-filter__completed-filter"}>
                <input className={"completed-filter__checkbox"}  type={"checkbox"} id="completed" checked={this.props.isTaskCompleted}
                       onChange={this.changeCompleteFilter}/>
                <label htmlFor="completed">Show done</label>
            </div>
            <form className={"task-filter__search-form"} onSubmit={this.searchTask}>
                <input ref="searchInput" placeholder="Search"/>
                <button className={"search-form__clean-button"} type={"button"} onClick={this.clearSearch}>x</button>
            </form>
        </div>
    }
}

export default connect()(TaskFilter);
