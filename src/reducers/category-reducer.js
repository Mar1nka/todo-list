import {initialState} from '../data/initial-data.js';
import Category from "../models/category";

export const categoryReducer = function (state = {categories: initialState.categories, activeCategoryId: 1}, action) {
    switch (action.type) {

        case 'ADD_CATEGORY':
            const newCategory = new Category({
                parentId: action.category.parentId,
                title: action.category.title,
                tasks: []
            });

            return {
                activeCategoryId: newCategory.id,
                categories: [...state.categories, newCategory]
            };


        case 'RENAME_CATEGORY':
            let index;

            for (let i = 0; i < state.categories.length; i++) {
                if (state.categories[i].id === action.category.id) {
                    index = i;
                    break;
                }
            }

            state.categories = [...state.categories.slice(0, index),
                action.category,
                ...state.categories.slice(index + 1)];

            return {...state};


        case 'DELETE_CATEGORY':
            removeSubCategories(state.categories, action.category, state.activeCategoryId);

            return {
                categories: [...state.categories],
                activeCategoryId: state.activeCategoryId
            };

        case 'SET_ACTIVE_CATEGORY':
            return {...state, activeCategoryId: action.category.id};

        case 'CHANGE_EXPAND_CATEGORY':
            const updatedCategory = {
                ...action.category,
                isExpanded: !action.category.isExpanded
            };

            state.categories = state.categories.map((category) => {
                if (category === action.category) {
                    return updatedCategory;
                }

                return category;
            });

            return {...state};
    }

    return state;
};

function removeSubCategories(categories, categoryForRemove, activeCategoryId) {
    const removeIndex = categories.indexOf(categoryForRemove);

    if (activeCategoryId === categoryForRemove.id) {
        activeCategoryId = null;
    }

    categories.splice(removeIndex, 1);

    for(let category of categories) {
        if(category.parentId === categoryForRemove.id) {
            removeSubCategories(categories, category, activeCategoryId);
        }
    }

    return categories;
}

