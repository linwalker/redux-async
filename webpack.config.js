
module.exports = {
    devtool:'eval-source-map',

    entry: __dirname + '/src/index.js',
    output: {
        path:__dirname + '/public',
        filename:'bundle.js'
    },

    module:{
        loaders:[
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },

    devServer:{
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    }
}