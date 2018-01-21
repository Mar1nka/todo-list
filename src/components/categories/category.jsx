import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducers/category-reducer.jsx';
import {CategoryView} from './category-view.jsx';

const store = createStore(reducer);

store.dispatch({
    type: "SET_CATEGORIES_STATE",
    state: {
        categories: [
            {title: 'Hobby', subCategories: []}
        ]
    }
});


ReactDOM.render(
    <Provider store={store}>
        <CategoryView/>
    </Provider>,
    document.getElementById("app")
);