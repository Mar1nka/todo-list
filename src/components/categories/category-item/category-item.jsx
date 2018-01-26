import React from 'react';
import {
    renameCategory,
    addSubCategory,
    deleteCategory,
    activeCategory,
    changeExpandCategory
} from '../../../actions/category-actions.jsx';
import CategoriesList from '../categories-list/categories-list.jsx';
import {connect} from 'react-redux';
import './category-item.css'

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.activeCategory = this.activeCategory.bind(this);
        this.changeExpandCategory = this.changeExpandCategory.bind(this);
        this.renameCategory = this.renameCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.addSubCategory = this.addSubCategory.bind(this);
    }

    activeCategory() {
        const action = activeCategory(this.props.category);
        this.props.dispatch(action);
    }

    changeExpandCategory() {
        const action = changeExpandCategory(this.props.category);
        this.props.dispatch(action);
    }

    renameCategory() {
        const action = renameCategory(this.props.category);
        this.props.dispatch(action);
    }

    deleteCategory() {
        const action = deleteCategory(this.props.category);
        this.props.dispatch(action);
    }

    addSubCategory() {
        const action = addSubCategory(this.props.category);
        this.props.dispatch(action);
    }

    getCategories(parentId) {
        let allCategories = this.props.allCategories;
        let categories = [];

        for (let category of allCategories) {
            if (category.parentId === parentId) {
                categories.push(category)
            }
        }

        return categories;
    }

    render() {
        const currentCategory = this.props.category;
        const categoryItemContentClass = currentCategory.id === this.props.activeCategoryId ?
            'category-item__content category-item__content--active' : 'category-item__content';

        let subCategories = this.getCategories(currentCategory.id);
        let hasChildren = subCategories.length;
        let categoryItemButtonExpandClass = 'category-item__button-expand ';

        if (hasChildren) {
            if (currentCategory.isExpanded) {
                categoryItemButtonExpandClass += 'category-item__button-expand--active';
            }
        } else {
            categoryItemButtonExpandClass += 'category-item__button-expand--hidden';
        }

        return <div className={"category-item"}>
            <div className={categoryItemContentClass} onClick={this.activeCategory}>
                <button className={categoryItemButtonExpandClass} onClick={this.changeExpandCategory}>></button>
                <span className={"category-item__title"}>{currentCategory.title}</span>
                <button className={"category-item__button-rename"} onClick={this.renameCategory}>rename</button>
                <button className={"category-item__button-delete "} onClick={this.deleteCategory}>delete</button>
                <button className={"category-item__button-add-sub-category "} onClick={this.addSubCategory}>add sub
                    category
                </button>
            </div>


            {currentCategory.isExpanded ? <CategoriesList className={'category-item__sub-category'}
                                                          categories={subCategories}
                                                          allCategories={this.props.allCategories}
                                                          activeCategoryId={this.props.activeCategoryId}
                                                          isSubCategories={true}/> : null}
        </div>

    }
};

export default connect()(CategoryItem)
