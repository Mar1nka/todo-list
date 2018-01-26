import React from 'react';
import {
    renameCategory,
    addSubCategory,
    deleteCategory,
    activeCategory,
    changeExpandCategory
} from '../../../actions/category-actions.jsx';
import CategoriesList from '../categories-list/categories-list.jsx';
import SubCategoriesList from '../sub-categories-list/sub-categories-list.jsx';
import './category-item.css'
import {connect} from 'react-redux';
import Category from "../../../models/category";

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.activeCategory = this.activeCategory.bind(this);
        this.changeExpandCategory = this.changeExpandCategory.bind(this);
        this.renameCategory = this.renameCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.addSubCategory = this.addSubCategory.bind(this);

        //test
        //this.subCategories = this.props.item.id === 1 ? [new Category({title:'SubCategory'})] : [];
    }

    activeCategory() {
        const action = activeCategory(this.props.item);
        this.props.dispatch(action);
    }

    changeExpandCategory() {
        const action = changeExpandCategory(this.props.item);
        this.props.dispatch(action);
    }

    renameCategory() {
        const action = renameCategory(this.props.item);
        this.props.dispatch(action);
    }

    deleteCategory() {
        const action = deleteCategory(this.props.item);
        this.props.dispatch(action);
    }

    addSubCategory() {
        const action = addSubCategory(this.props.item);
        this.props.dispatch(action);
    }

    render() {

        const categoryItemClass = this.props.item.id === this.props.activeCategoryId ?
            'category-item category-item--active' : 'category-item';

        let categoryItemButtonExpandClassPart1 = 'category-item__button-expand category-item__button-expand--not-display';
        let hasExpand = this.props.subCategories.length;

        if (hasExpand) {
            categoryItemButtonExpandClassPart1 = 'category-item__button-expand';
        }

        let categoryItemButtonExpandClassPart2 = '';

        if (this.props.item.isExpand) {
            categoryItemButtonExpandClassPart2 = 'category-item__button-expand--active';
        }


        let categoryItemButtonExpandClass = categoryItemButtonExpandClassPart1 + categoryItemButtonExpandClassPart2;

        //this.props.item.id === this.props.activeCategoryId ?


        return <div className={categoryItemClass}>
            <button className={categoryItemButtonExpandClass} onClick={this.changeExpandCategory}>></button>
            <span className={"category-item__title"}>{this.props.item.title}</span>
            <button className={"category-item__button-rename"} onClick={this.renameCategory}>rename</button>
            <button className={"category-item__button-delete "} onClick={this.deleteCategory}>delete</button>
            <button className={"category-item__button-add-sub-category "} onClick={this.addSubCategory}>add sub category
            </button>

            <SubCategoriesList className={'category-item__sub-category'} categories={this.props.subCategories}
                               allCategories={this.props.allCategories} activeCategoryId={this.props.activeCategoryId}
                               isExpandParent={this.props.item.isExpand}/>

        </div>
    }
};

export default connect()(CategoryItem)
