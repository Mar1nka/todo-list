import React from 'react';
import CategoryItem from '../category-item/category-item.jsx';
import './sub-categories-list.css'

export default class SubCategoriesList extends React.Component {
    constructor(props) {
        super(props);
    }


    getSubCategories(category) {
        let subCategories = [];

        for (let i = 0; i < this.props.allCategories.length; i++) {
            if (this.props.allCategories[i].parentId === category.id) {
                subCategories.push(this.props.allCategories[i])
            }
        }

        return subCategories;
    }

    render() {
        if(this.props.isExpandParent) {
            return <div className={"sub-category-list"}>
                {this.props.categories.map((category, index) => {
                        return <CategoryItem key={index}
                                             item={category}
                                             activeCategoryId={this.props.activeCategoryId}
                                             subCategories={this.getSubCategories(category)}
                                             allCategories={this.props.allCategories}
                        />

                    }
                )}
            </div>
        } else {
            return <div />
        }
    }
}
