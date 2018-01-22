const addTask = function (title) {
    return {
        type: "ADD_TASK",
        title
    }
};

const setCompletedTask = function (task) {
    return {
        type: "SET_COMPLETED_TASK",
        task
    }
};

const renameTask = function (task) {
    return {
        type: "RENAME_TASK",
        task
    }
};

// const deleteTask = function (task) {
//     return {
//         type: "DELETE_TASK",
//         task
//     }
// };




export {addTask, setCompletedTask, renameTask};
