import React from 'react';
import CategoryItem from '../category-item/category-item.jsx';
import './category-list.css'

export default class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
    }



    getSubCategories(category) {
        let subCategories = [];

        for(let i = 0; i < this.props.categories.length; i++) {
            if(this.props.categories[i].parentId === category.id) {
                subCategories.push(this.props.categories[i])
            }
        }


        return subCategories;
    }

    render() {


        return <div className={"category-list"}>
            {this.props.categories.map((category, index) => {
                    if (category.parentId === null) {
                        return <CategoryItem key={index}
                                             item={category}
                                             activeCategoryId={this.props.activeCategoryId}
                                             subCategories={this.getSubCategories(category)}
                                             allCategories={this.props.categories}
                        />
                    }
                }
            )}
        </div>
    }
}
