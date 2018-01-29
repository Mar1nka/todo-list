const addTask = function (task) {
    return {
        type: "ADD_TASK",
        task
    }
};

const setCompletedTask = function (task) {
    return {
        type: "SET_COMPLETED_TASK",
        task
    }
};

const updateTask = function (task) {
    return {
        type: "UPDATE_TASK",
        task
    }
};

const setEditTask = function (editTask) {
    return {
        type: "SET_EDIT_TASK",
        editTask
    }
};

export {addTask, setCompletedTask, updateTask, setEditTask};
