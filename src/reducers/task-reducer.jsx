import {Map} from 'immutable';

export const reducer = function (state = Map(), action) {
    switch (action.type) {
        case 'SET_TASK_STATE':
            return state.merge(action.state);

        case 'ADD_TASK':
            const newTask = {
                title: action.task.title,
                description: action.task.description || '',
                isCompleted: action.task.isCompleted || false
            };

            //yes, Mar1nka, it is not easy, but not so complex way
            //Inserting and Removing Items in Arrays
            // https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html#inserting-and-removing-items-in-arrays
            // or look how to update array in reducers.js  https://gkp43215.gitbooks.io/redux-in-russian/docs/basics/ExampleTodoList.html
            return state.update('tasks', (tasks) => {
                return [...tasks, newTask];
            });

        case 'SET_COMPLETED_TASK':
            return state.update('tasks', (tasks) => {
                const updatedTask = {
                    title: action.task.title,
                    description: action.task.description,
                    isCompleted: !action.task.isCompleted
                };

                return tasks.map( (task, index) => {
                    if(task === action.task) {
                        return updatedTask;
                    }

                    return task;
                });
            });

        case 'RENAME_TASK':
            return state;

            // case 'DELETE_TASK':
            //     return state.update("tasks",
            //         (tasks) => tasks.filter(
            //             (item) =>  item.title !== action.task.title
            //         )
            //     );

            return state;

    }

    return state;
};



