import React from 'react';
import {addCategory} from '../../../actions/category-actions.js';
import {connect} from 'react-redux';
import './category-create.css';

class CategoryCreate extends React.Component {
    constructor(props) {
        super(props);

        this.addCategory = this.addCategory.bind(this);
    }

    addCategory(event) {
        event.preventDefault();

        const categoryTitle = this.refs.categoryInput.value.trim();

        if (categoryTitle !== "") {
            this.refs.categoryInput.value ="";
            const category = {title: categoryTitle};
            const action = addCategory(category);
            this.props.dispatch(action);
        }
    }

    render() {
        return <form className={"category-create-form"}>
            <input ref="categoryInput" placeholder="Enter category title" />
            <button className={"category-create__add-button"} onClick = {this.addCategory}>Add</button>
        </form>
    }
};

export default connect()(CategoryCreate);
