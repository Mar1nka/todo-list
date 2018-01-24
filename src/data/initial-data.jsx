const categories = [
    {
        title: 'Hobby',
        subCategories: [],
        tasks: [{title: 'first', isCompleted: false, description: ''}]
    },
    {
        title: 'Music',
        subCategories: [],
        tasks: [{title: 'second', isCompleted: false, description: ''}]
    }
];

export const initialState = {
    'categories': categories,
    'activeCategory': categories[0]
};
