import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../reducers/main-components-reducer.jsx';
import Categories from './categories/category.jsx'
import Tasks from './tasks/task.jsx'

import {Map} from 'immutable';

const store = createStore();



ReactDOM.render(
    <Provider store={store}>
        <Categories />
        <Tasks />
    </Provider>,
    document.getElementById("main-components")
);
