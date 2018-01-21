import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/category-actions.jsx';
import CategoryCreate from './category-create/category-create.jsx';
import CategoriesList from './categories-list/categories-list.jsx';

class CategoryView extends React.Component {

    render() {
        return <div>
            <CategoryCreate addCategory={this.props.addCategory}/>
            <CategoriesList {...this.props} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        categories: state.get("categories")
    };
}

const connectedCategoryView = connect(mapStateToProps, actions)(CategoryView);

export {connectedCategoryView as CategoryView}