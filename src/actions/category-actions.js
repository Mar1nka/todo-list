const addCategory = function (category) {
    return {
        type: "ADD_CATEGORY",
        category
    }
};

const activeCategory = function (category) {
    return {
        type: "SET_ACTIVE_CATEGORY",
        category
    }
};

const renameCategory = function (category) {
    return {
        type: "RENAME_CATEGORY",
        category
    }
};

const deleteCategory = function (category) {
    return {
        type: "DELETE_CATEGORY",
        category
    }
};


const changeExpandCategory = function (category) {
    return {
        type: "CHANGE_EXPAND_CATEGORY",
        category
    }
};

export {addCategory, activeCategory, renameCategory, deleteCategory, changeExpandCategory};
