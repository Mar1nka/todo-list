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

const addSubCategory = function (category) {
    return {
        type: "ADD_SUB_CATEGORY",
        category
    }
};


export {addCategory, activeCategory, renameCategory, deleteCategory, addSubCategory};
