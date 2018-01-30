import React from 'react';
import CategoryItem from '../category-item/category-item.jsx';
import './category-list.css'

export default class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let categoryListClass = "category-list";

        if (this.props.isSubCategories) {
            categoryListClass += ' ' + 'category-list--sub-categories';
        }

        return <div className={categoryListClass}>
            {this.props.categories.map((category, index) => {
                    return <CategoryItem key={category.id}
                                         category={category}
                                         activeCategoryId={this.props.activeCategoryId}
                                         allCategories={this.props.allCategories}
                    />
                }
            )}
        </div>
    }
}
