import { combineReducers } from 'redux';
import {categoryReducer} from './category-reducer.js';
import {taskReducer} from './task-reducer.js';

export default combineReducers({
    categoryReducer, taskReducer
});
