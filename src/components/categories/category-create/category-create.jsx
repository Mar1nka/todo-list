import React from 'react';
import {addCategory} from '../../../actions/category-actions.jsx';
import {connect} from 'react-redux';

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
        return <form>
            <input ref="categoryInput" placeholder="Enter category title" />
            <button onClick = {this.addCategory}>Add</button>
        </form>
    }
};

export default connect()(CategoryCreate);
