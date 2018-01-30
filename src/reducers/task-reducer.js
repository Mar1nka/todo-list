import {initialState} from '../data/initial-data.js';

export const taskReducer = function (state = initialState.tasks, action) {
    switch (action.type) {
        case 'SET_TASK_STATE':
            return Object.assign({}, action.state);

        case 'ADD_TASK':
            return [
                ...state,
                action.task
            ];

        case 'SET_COMPLETED_TASK':
            const updatedTask = {
                ...action.task,
                isCompleted: !action.task.isCompleted
            };

            state = state.map((task) => {
                if (task === action.task) {
                    return updatedTask;
                }

                return task;
            });

            return [...state];

        case 'UPDATE_TASK':
            let index;

            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.task.id) {
                    index = i;
                    break;
                }
            }

            return [...state.slice(0, index),
                action.task,
                ...state.slice(index + 1)];

        case 'DELETE_CATEGORY':
            // TODO remove tasks of subCategories of remove category
            let categoryId = action.category.id;

            state = state.filter((task) => {
                return task.categoryId !== categoryId;
            });

            return [...state];

    }

    return state;
};





