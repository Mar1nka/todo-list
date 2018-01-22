const path = require('path');

module.exports = {
    // entry: './src/components/categories/category.jsx', // входная точка - исходный файл
    entry: './src/components/tasks/task.jsx', // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для js
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
            }
        ]
    },
    // devServer: {
    //     inline:true,
    //     port:9000
    // },
    devtool: 'source-map'
};
