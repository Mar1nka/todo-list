const addCategory = function (title) {
    return {
        type: "ADD_CATEGORY",
        title
    }
};

const expandCategory = function (category) {
    return {
        type: "EXPAND_CATEGORY",
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


export {addCategory, expandCategory, renameCategory, deleteCategory, addSubCategory};
