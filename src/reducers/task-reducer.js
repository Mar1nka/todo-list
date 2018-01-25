import {initialState} from '../data/initial-data.js';
import Task from "../models/task";

export const taskReducer = function (state = initialState.tasks, action) {
    switch (action.type) {
        case 'SET_TASK_STATE':
            return Object.assign({}, action.state);

        case 'ADD_TASK':

            //Inserting and Removing Items in Arrays
            // https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html#inserting-and-removing-items-in-arrays
            // or look how to update array in reducers.js
            // https://gkp43215.gitbooks.io/redux-in-russian/docs/basics/ExampleTodoList.html
            return [
                ...state,
                action.task
            ];


        case 'SET_COMPLETED_TASK':
            const updatedTask = {
                ...action.task,
                isCompleted: !action.task.isCompleted
            };

            state = state.map((task, index) => {
                if (task === action.task) {
                    return updatedTask;
                }

                return task;
            });

            return [...state];

        case 'RENAME_TASK':
            return state;

    }

    return state;
};





