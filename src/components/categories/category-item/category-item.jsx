import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {
    renameCategory,
    addSubCategory,
    deleteCategory,
    activeCategory,
    changeExpandCategory
} from '../../../actions/category-actions.js';
import CategoriesList from '../categories-list/categories-list.jsx';

import './category-item.css'

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.activeCategory = this.activeCategory.bind(this);
        this.changeExpandCategory = this.changeExpandCategory.bind(this);
        this.renameCategory = this.renameCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.addSubCategory = this.addSubCategory.bind(this);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    activeCategory() {
        const action = activeCategory(this.props.category);
        this.props.dispatch(action);
    }

    changeExpandCategory() {
        const action = changeExpandCategory(this.props.category);
        this.props.dispatch(action);
    }

    /**
     * Modal window https://www.npmjs.com/package/react-modal
     */
    renameCategory() {
        const category = {...this.props.category, title: this.refs.categoryTitleInput.value};
        const action = renameCategory(category);

        this.props.dispatch(action);
        this.closeModal();
    }

    deleteCategory() {
        const action = deleteCategory(this.props.category);
        this.props.dispatch(action);
    }

    addSubCategory() {
        const action = addSubCategory(this.props.category);
        this.props.dispatch(action);
    }

    getCategories(parentId) {
        let allCategories = this.props.allCategories;
        let categories = [];

        for (let category of allCategories) {
            if (category.parentId === parentId) {
                categories.push(category)
            }
        }

        return categories;
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const currentCategory = this.props.category;
        const categoryItemContentClass = currentCategory.id === this.props.activeCategoryId ?
            'category-item__content category-item__content--active' : 'category-item__content';

        let subCategories = this.getCategories(currentCategory.id);
        let hasChildren = subCategories.length;
        let categoryItemButtonExpandClass = 'category-item__button-expand ';

        if (hasChildren) {
            if (currentCategory.isExpanded) {
                categoryItemButtonExpandClass += 'category-item__button-expand--active';
            }
        } else {
            categoryItemButtonExpandClass += 'category-item__button-expand--hidden';
        }


        let categoryModal = <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}>
            <h2>Edit category</h2>
            <div>
                <input ref="categoryTitleInput" type={"text"}
                       placeholder={"Title"}
                       defaultValue={currentCategory.title}/>
            </div>
            <div>
                <button onClick={this.renameCategory}>Ok</button>
                <button onClick={this.closeModal}>Close</button>
            </div>
        </Modal>;


        return <div className={"category-item"}>
            <div className={categoryItemContentClass} onClick={this.activeCategory}>
                <div className={"category-item__title-wrapper"}>
                    <button className={categoryItemButtonExpandClass} onClick={this.changeExpandCategory}>></button>
                    <span className={"category-item__title"}>{currentCategory.title}</span>
                </div>
                <div className={"category-item__buttons"}>
                    <button className={"category-item__button category-item__button-rename"}
                            onClick={this.openModal}>rename
                    </button>
                    <button className={"category-item__button category-item__button-add-sub-category"}
                            onClick={this.addSubCategory}>+
                    </button>
                    <button className={"category-item__button category-item__button-delete"}
                            onClick={this.deleteCategory}>x
                    </button>
                </div>
            </div>

            {categoryModal}

            {currentCategory.isExpanded ?
                <CategoriesList categories={subCategories}
                                allCategories={this.props.allCategories}
                                activeCategoryId={this.props.activeCategoryId}
                                isSubCategories={true}/> : null}
        </div>

    }
}

export default connect()(CategoryItem)
