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

const editTask = function (task) {
    return {
        type: "EDIT_TASK",
        task
    }
};

export {addTask, setCompletedTask, editTask};
