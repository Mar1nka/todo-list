import React from 'react';
import {renameCategory,addSubCategory, deleteCategory, activeCategory} from '../../../actions/category-actions.jsx';
import './category-item.css'
import {connect} from 'react-redux';

  class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.activeCategory = this.activeCategory.bind(this);
        this.renameCategory = this.renameCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.addSubCategory = this.addSubCategory.bind(this);
    }

    activeCategory () {
        const action = activeCategory(this.props.item);
        this.props.dispatch(action);
    }

    renameCategory () {
        const action = renameCategory(this.props.item);
        this.props.dispatch(action);
    }

    deleteCategory (){
        const action = deleteCategory(this.props.item);
        this.props.dispatch(action);
    }

    addSubCategory () {
        const action = addSubCategory(this.props.item);
        this.props.dispatch(action);
    }


    render() {
        return <div className={"category-item"}>
            <button className={"category-item__button--expand"}  onClick={this.activeCategory}>expand</button>
            <span className={"category-item__title"}>{this.props.item.title}</span>
            <button className={"category-item__button--rename"} onClick={this.renameCategory}>rename</button>
            <button className={"category-item__button--delete "} onClick={this.deleteCategory}>delete</button>
            <button className={"category-item__button--add-sub-category "} onClick={this.addSubCategory}>add sub category</button>
        </div>
    }
};

export default connect()(CategoryItem)
