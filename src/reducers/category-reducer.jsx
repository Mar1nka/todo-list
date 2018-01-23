import {Map} from 'immutable';

export const reducer = function (state = Map(), action) {
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

            case 'EXPAND_CATEGORY':
                const newExpandCategory = action.category;
                return state.update('expandCategory', () => {
                    return newExpandCategory;
                });
            break;

        case 'RENAME_CATEGORY':
            return state;

        case 'DELETE_CATEGORY':
            return state.update("categories",
                (categories) => categories.filter(
                    (item) =>  item.title !== action.category.title
                )
            );
            return state;

        case 'ADD_SUB_CATEGORY':
            return state;


    }

    return state;
};

