import {initialState} from '../data/initial-data.js';

export const taskEditReducer = function (state = initialState.taskEdit, action) {
    switch (action.type) {
        case 'SET_EDIT_TASK':

            if (action.editTask === null) {
                return null
            } else {
                return {...action.editTask}
            }

    }

    return state;
};
