import React from 'react';
import CategoryItem from '../category-item/category-item.jsx';
import './category-list.css'

export default class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className={"category-list"}>
            {this.props.categories.map( (category, index) =>
                {return <CategoryItem key={index}
                              item={category}
                                      activeCategory={this.props.activeCategory}
                />}
            )}
        </div>
    }
}
