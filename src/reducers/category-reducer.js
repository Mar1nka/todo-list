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
            return state;

        case 'DELETE_CATEGORY':
            const removeIndex = state.categories.indexOf(action.category);
            let activeCategoryId = state.activeCategoryId;

            if(state.activeCategoryId === action.category.id){
                activeCategoryId = null;
            }

            return {
                categories: [...state.categories.slice(0, removeIndex), ...state.categories.slice(removeIndex + 1)],
            activeCategoryId: activeCategoryId};


        case 'SET_ACTIVE_CATEGORY':
            return {...state,  activeCategoryId: action.category.id};
    }

    return state;
};

