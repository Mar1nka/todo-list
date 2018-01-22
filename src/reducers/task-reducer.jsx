import {Map} from 'immutable';

export const reducer = function (state = Map(), action) {
    switch (action.type) {
        case 'SET_TASK_STATE':
            return state.merge(action.state);

        case 'ADD_TASK':
            const task = {
                title: action.title,
                descriptions: action.descriptions,
                isCompleted: action.isCompleted

            };
            return state.update('tasks', (tasks) => tasks.push(task));

        case 'SET_COMPLETED_TASK':
            return state;

        case 'RENAME_TASK':
            return state;

        // case 'DELETE_TASK':
        //     return state.update("tasks",
        //         (tasks) => tasks.filter(
        //             (item) =>  item.title !== action.task.title
        //         )
        //     );
        //     return state;

    }

    return state;
};



