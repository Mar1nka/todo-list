import Category from '../models/category.js';
import Task from '../models/task.js';

const categories = [
    new Category({
        title: 'Hobby'
    }),
    new Category({
        title: 'Music'
    })
];

const tasks = [
    new Task({
        categoryId: 1,
        title: 'first',
        isCompleted: false,
        description: ''
    }),
    new Task({
        categoryId: 2,
        title: 'second',
        isCompleted: true,
        description: ''
    })
];

export const initialState = {
    'categories': categories,
    'tasks': tasks
};
