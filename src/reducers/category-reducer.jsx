import {Map} from 'immutable';

export const reducer = function (state = Map(), action) {
    switch (action.type) {
        case 'SET_CATEGORIES_STATE':
            return state.merge(action.state);
        case 'ADD_CATEGORY':
            const category = {
                title: action.title,
                subCategories: []
            };
            return state.update('categories', (categories) => categories.push(category));
        case 'EXPAND_CATEGORY':
            return state;

        case 'RENAME_CATEGORY':
            return state;

        case 'DELETE_CATEGORY':
            // return state.update("phones",
            //     (phones) => phones.filterNot(
            //         (item) => item === action.phone
            //     )
            // );
            return state;

        case 'ADD_SUB_CATEGORY':
            return state;


    }

    return state;
};
