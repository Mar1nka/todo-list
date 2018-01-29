
const setEditTask = function (taskEdit) {
    return {
        type: "SET_TASK_EDIT",
        taskEdit
    }
};

const cleanTaskEdit = function (taskEdit) {
    return {
        type: "CLEAN_TASK_EDIT",
        taskEdit
    }
};


export {cleanTaskEdit, setEditTask};
