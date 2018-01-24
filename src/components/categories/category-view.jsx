import React from 'react';
import {connect} from 'react-redux';
import CategoryCreate from './category-create/category-create.jsx';
import CategoriesList from './categories-list/categories-list.jsx';

export class CategoryView extends React.Component {

    render() {
        return <div>
            <CategoryCreate addCategory={this.props.addCategory}/>
            <CategoriesList {...this.props} />
        </div>
    }
}

// function mapStateToProps(state) {
//     console.log('state', state);
//     return {
//         categories: state.categoryReducer.get("categories"),
//         activeCategory: state.get("activeCategory")
//
//     };
// }
//
// const connectedCategoryView = connect(mapStateToProps, actions)(CategoryView);
//
// export {connectedCategoryView as CategoryView}
