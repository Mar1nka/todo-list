import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers/reducers.js';
import AppView from './app-view.jsx';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <AppView/>
    </Provider>,
    document.querySelector(".app")
);
