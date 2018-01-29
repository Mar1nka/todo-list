import Category from '../models/category.js';
import Task from '../models/task.js';

const category1 = new Category({
    title: 'Hobby',
    isExpanded: false
});

const category2 = new Category({
    title: 'Music',
});

const subCategory1 = new Category({
    title: 'sub hobby',
    parentId: category1.id
});

const subSubCategory1 = new Category({
    title: 'sub sub hobby',
    parentId: subCategory1.id
});

const subCategory2 = new Category({
    title: 'sub music',
    parentId: category2.id
});


const categories = [
    category1,
    subCategory1,
    subSubCategory1,
    category2,
    subCategory2
];

const tasks = [
    new Task({
        categoryId: 1,
        title: 'first',
        isCompleted: true,
        description: ''
    }),
    new Task({
        categoryId: 2,
        title: 'second',
        isCompleted: true,
        description: ''
    })
];

const taskEdit = {
    id: 1,
    categoryId: 1,
    title: 'first',
    isCompleted: true,
    description: 'it is first'
};

export const initialState = {
    'categories': categories,
    'tasks': tasks,
    'taskEdit': taskEdit
};
