import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducers/category-reducer.jsx';
import {CategoryView} from './category-view.jsx';
import {Map} from 'immutable';

const store = createStore(reducer);

store.dispatch({
    type: "SET_CATEGORIES_STATE",
    state: new Map({
        categories: [
            {
                title: 'Hobby',
                subCategories: [],
                tasks: [{title: 'first'}]
            },
            {
                title: 'Music',
                subCategories: [],
                tasks: [{title: 'second'}]
            }
        ],
        expandCategory: {
            title: 'Hobby',
            subCategories: [],
            tasks: [{title: 'first'}]
        }
    })


});


ReactDOM.render(
    <Provider store={store}>
        <CategoryView/>
    </Provider>,
    document.getElementById("categories")
);




