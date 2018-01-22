import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducers/task-reducer.jsx';
import {TaskView} from './task-view.jsx';

const store = createStore(reducer);

store.dispatch({
    type: "SET_TASK_STATE",
    state: {
        tasks: [
            {
                title: 'My hobby',
                descriptions: 'sport, sport',
                isCompleted: 'true'
            }
        ]
    }
});


ReactDOM.render(
    <Provider store={store}>
        <TaskView/>
    </Provider>,
    document.getElementById("tasks")
);
