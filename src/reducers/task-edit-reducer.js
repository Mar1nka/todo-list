import {initialState} from '../data/initial-data.js';

export const taskEditReducer = function (state = initialState.taskEdit, action) {
    switch (action.type) {
        case 'SET_TASK_EDIT':
            return action.taskEdit;

        case 'CLEAN_TASK_EDIT':
            return action.taskEdit;
    }

    return state;
};
