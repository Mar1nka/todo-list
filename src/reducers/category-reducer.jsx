import {Map} from 'immutable';
import {initialState} from '../data/initial-data.jsx';

export const categoryReducer = function (state = Map(initialState), action) {
    switch (action.type) {
        case 'SET_CATEGORIES_STATE':
            return state.merge(action.state);

        case 'ADD_CATEGORY':
            const newCategory = {
                title: action.category.title,
                subCategories: [],
                tasks: []
            };

            return state.update('categories', (categories) => {
                return [...categories, newCategory];
            });

        case 'SET_ACTIVE_CATEGORY':
            const newActiveCategory = action.category;
            return state.update('activeCategory', () => {
                return newActiveCategory;
            });
        case 'RENAME_CATEGORY':
            return state;

        case 'DELETE_CATEGORY':
            return state.update("categories",
                (categories) => categories.filter(
                    (item) => item.title !== action.category.title
                )
            );
            return state;

        case 'ADD_SUB_CATEGORY':
            return state;
    }

    return state;
};

