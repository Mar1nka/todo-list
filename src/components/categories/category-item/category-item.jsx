import React from 'react';

export default class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"category-item"}>
            <button className={"category-item__button--expand"}  onClick={() => this.props.activeCategory(this.props.item)}>expand</button>
            <span className={"category-item__title"}>{this.props.item.title}</span>
            <button className={"category-item__button--rename"} onClick={() => this.props.renameCategory(this.props.item)}>rename</button>
            <button className={"category-item__button--delete "} onClick={() => this.props.deleteCategory(this.props.item)}>delete</button>
            <button className={"category-item__button--add-sub-category "} onClick={() => this.props.addSubCategory(this.props.item)}>add sub category</button>
        </div>
    }
};
