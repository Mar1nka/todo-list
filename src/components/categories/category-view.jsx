import React from 'react';
import {connect} from 'react-redux';
import CategoryCreate from './category-create/category-create.jsx';
import CategoriesList from './categories-list/categories-list.jsx';
import './categories.css'

export class CategoryView extends React.Component {

    getCategories(parentId = null) {
        let allCategories = this.props.allCategories;
        let categories = [];

        for (let category of allCategories) {
            if(category.parentId === parentId) {
                categories.push(category)
            }
        }

        return categories;
    }

    render() {
        const categories = this.getCategories();

        return <div className={"categories"}>
            <CategoryCreate addCategory={this.props.addCategory}/>
            <CategoriesList categories={categories} {...this.props} />
        </div>
    }
}
