import { combineReducers } from 'redux';
import {categoryReducer} from './category-reducer.jsx';
import {taskReducer} from './task-reducer.jsx';

export default combineReducers({
    categoryReducer, taskReducer
});
