import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {
    renameCategory,
    deleteCategory,
    activeCategory,
    changeExpandCategory,
    addCategory
} from '../../../actions/category-actions.js';
import CategoriesList from '../categories-list/categories-list.jsx';

import './category-item.css'
import Category from "../../../models/category";

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalEditCategoryIsOpen: false,
            modalAddSubCategoryIsOpen: false
        };

        this.activeCategory = this.activeCategory.bind(this);
        this.changeExpandCategory = this.changeExpandCategory.bind(this);
        this.renameCategory = this.renameCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.addSubCategory = this.addSubCategory.bind(this);

        this.openEditCategoryModal = this.openEditCategoryModal.bind(this);
        this.closeEditCategoryModal = this.closeEditCategoryModal.bind(this);

        this.openAddSubCategoryModal = this.openAddSubCategoryModal.bind(this);
        this.closeAddSubCategoryModal = this.closeAddSubCategoryModal.bind(this);

        this.customStyles = {
            content: {
                top: '40%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                border: '2px solid #428bca'
            }
        };
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

    renameCategory() {
        const category = {...this.props.category, title: this.refs.categoryTitleInput.value};
        const action = renameCategory(category);

        this.props.dispatch(action);
        this.closeEditCategoryModal();
    }

    deleteCategory() {
        const action = deleteCategory(this.props.category);
        this.props.dispatch(action);
    }

    addSubCategory() {
        let subCategory = new Category({
            parentId: this.props.category.id,
            title: this.refs.subCategoryTitleInput.value
        });

        console.log()

        const action = addCategory(subCategory);
        this.props.dispatch(action);

        this.closeAddSubCategoryModal();
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

    openEditCategoryModal() {
        this.setState({
            modalEditCategoryIsOpen: true,
            modalAddSubCategoryIsOpen: this.state.modalAddSubCategoryIsOpen
        });
    }

    closeEditCategoryModal() {
        this.setState({
            modalEditCategoryIsOpen: false,
            modalAddSubCategoryIsOpen: this.state.modalAddSubCategoryIsOpen
        });
    }

    openAddSubCategoryModal() {
        this.setState({
            modalEditCategoryIsOpen: this.state.modalEditCategoryIsOpen,
            modalAddSubCategoryIsOpen: true
        });
    }

    closeAddSubCategoryModal() {
        this.setState({
            modalEditCategoryIsOpen: this.state.modalEditCategoryIsOpen,
            modalAddSubCategoryIsOpen: false
        });
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


        let editCategoryModal = <Modal
            isOpen={this.state.modalEditCategoryIsOpen}
            onRequestClose={this.closeEditCategoryModal}
            style={this.customStyles}>

            <div className={"modal"}>
                <h2 className={"modal__header"}>Edit category</h2>
                <div className={"modal__title"}>
                    <input className={"title__input"} ref="categoryTitleInput" type={"text"}
                           placeholder={"Title"}
                           defaultValue={currentCategory.title}/>
                </div>
                <div className={"modal__buttons"}>
                    <button className={"modal__button modal__ok-button"} onClick={this.renameCategory}>Ok</button>
                    <button className={"modal__button modal__cancel-button"} onClick={this.closeEditCategoryModal}>Cancel</button>
                </div>
            </div>
        </Modal>;

        let addSubCategoryModal = <Modal
            isOpen={this.state.modalAddSubCategoryIsOpen}
            onRequestClose={this.closeEditCategoryModal}
            style={this.customStyles}>

            <div className={"modal"}>
                <h2 className={"modal__header"}>Add subcategory</h2>
                <div className={"modal__title"}>
                    <input className={"title__input"} ref="subCategoryTitleInput" type={"text"}
                           placeholder={"Title"}/>
                </div>
                <div className={"modal__buttons"}>
                    <button className={"modal__button modal__ok-button"} onClick={this.addSubCategory}>Ok</button>
                    <button className={"modal__button modal__cancel-button"} onClick={this.closeAddSubCategoryModal}>Cancel</button>
                </div>
            </div>
        </Modal>;


        return <div className={"category-item"}>
            <div className={categoryItemContentClass} onClick={this.activeCategory}>
                <div className={"category-item__title-wrapper"}>
                    <button className={categoryItemButtonExpandClass} onClick={this.changeExpandCategory}>></button>
                    <span className={"category-item__title"}>{currentCategory.title}</span>
                </div>
                <div className={"category-item__buttons"}>
                    <button className={"category-item__button category-item__button-edit"}
                            onClick={this.openEditCategoryModal}>edit
                    </button>
                    <button className={"category-item__button category-item__button-add-sub-category"}
                            onClick={this.openAddSubCategoryModal}>+
                    </button>
                    <button className={"category-item__button category-item__button-delete"}
                            onClick={this.deleteCategory}>x
                    </button>
                </div>
            </div>

            {editCategoryModal}
            {addSubCategoryModal}

            {currentCategory.isExpanded ?
                <CategoriesList categories={subCategories}
                                allCategories={this.props.allCategories}
                                activeCategoryId={this.props.activeCategoryId}
                                isSubCategories={true}/> : null}
        </div>

    }
}

export default connect()(CategoryItem)
