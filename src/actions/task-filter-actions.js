const setSearchText = function (textSearch) {
    return {
        type: "SET_TEXT_SEARCH",
        textSearch: textSearch
    }
};


const toggleCompleteFilter = function () {
    return {
        type: "TOGGLE_COMPLETE_FILTER",
    }
};



export {setSearchText, toggleCompleteFilter};
