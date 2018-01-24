import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers/reducers.jsx';
import AppView from './app-view.jsx';
import {Map} from 'immutable';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <AppView/>
    </Provider>,
    document.getElementById("main-components")
);