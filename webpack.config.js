const path = require('path');

module.exports = {
    entry: './src/components/app.jsx', // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module: {

        rules: [   //загрузчик для js
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["env", "react"],    // используемые плагины
                    plugins: [ 'transform-object-rest-spread' ]
                }
            },
            {
                test: /\.css$/,
                loader: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader')
                ]
            }
        ]

    },
    devtool: 'source-map'
};
