export const taskFilterReducer = function (state = {textSearch: '', isCompleted: false}, action) {
    switch (action.type) {

        case 'SET_TEXT_SEARCH':
            return {...state, textSearch: action.textSearch};

        case 'TOGGLE_COMPLETE_FILTER':
            let isCompleted = !state.isCompleted;
            return {...state, isCompleted: isCompleted};
    }

    return state;

};





