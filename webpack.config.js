
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
        'index': './src/index.js',
        'odin_projects/weather_app/output/main': './src/odin_projects/weather_app/index.js',
        'odin_projects/todo_list_app/output/main': './src/odin_projects/todo_list_webpack/index.js',
        'odin_projects/tictactoe_app/output/main': './src/odin_projects/tictactoe_webpack/ttt.js',
        'sign_in_files/sign_up_validation': './src/sign_in_files/validate.js',
        'odin_projects/main': './src/odin_projects/index.js',
    },
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: '[name].js',
    assetModuleFilename: "assets/[hash].[ext]",
    asyncChunks:true,
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Home Page',
        filename: './index.html',
        template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
        title: "Odin Projects",
        filename: 'odin_projects/index.html',
        template: './src/odin_projects/index.html'
    }),
    new HtmlWebpackPlugin({
        title: "Weather App",
        filename: 'odin_projects/weather_app/output/index.html',
        template: './src/odin_projects/weather_app/index.html'
    }),
    new HtmlWebpackPlugin({
        title: "To do list",
        filename: 'odin_projects/todo_list_app/output/index.html',
        template: './src/odin_projects/todo_list_webpack/todo_list_template.html'
    }),
    new HtmlWebpackPlugin({
        title: 'Tic Tac Toe',
        filename: 'odin_projects/tictactoe_app/output/index.html',
        template: './src/odin_projects/tictactoe_webpack/ttt.html'
    }),
    new HtmlWebpackPlugin({
        title: 'Sign In',
        filename: 'sign_in_files/sign_up.html',
        template: './src/sign_in_files/sign_up.html'
    })
  ],
  module: {
      rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
  }
}