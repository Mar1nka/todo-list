import React from 'react';
import CategoryItem from '../category-item/category-item.jsx';

export default class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            {this.props.categories.map( (category, index) =>
                {return <CategoryItem key={index}
                              item={category}
                                      activeCategory={this.props.activeCategory}
                              renameCategory={this.props.renameCategory}
                              deleteCategory={this.props.deleteCategory}
                              addSubCategory={this.props.addSubCategory}
                />}
            )}
        </div>
    }
}
