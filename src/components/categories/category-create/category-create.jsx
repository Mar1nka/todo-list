import React from 'react';

export default class CategoryCreate extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(event) {
        event.preventDefault();

        const categoryTitle = this.refs.categoryInput.value.trim();

        if (categoryTitle !== "") {
            this.refs.categoryInput.value ="";
            return this.props.addCategory(categoryTitle);
        }
    }

    render() {
        return <form>
            <input ref="categoryInput" placeholder="Enter category title" />
            <button onClick = {this.onClick.bind(this)}>Add</button>
        </form>
    }
};