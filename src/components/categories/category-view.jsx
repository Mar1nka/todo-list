import React from 'react';
import {connect} from 'react-redux';
import CategoryCreate from './category-create/category-create.jsx';
import CategoriesList from './categories-list/categories-list.jsx';
import './categories.css'

export class CategoryView extends React.Component {

    render() {
        return <div className={"categories"}>
            <CategoryCreate addCategory={this.props.addCategory}/>
            <CategoriesList {...this.props} />
        </div>
    }
}
