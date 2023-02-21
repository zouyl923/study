const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',//指定原文件的存放路径
    filename: './index.html',//指定生成的文件的存放路径
})

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/index.js'), //打包入口文件路径
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js' //输入文件的名称
    },
    plugins: [htmlPlugin],
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    module: {
        //所有第三方文件模块的匹配规则
        rules: [
            //文件后缀名的匹配规则
            //处理css css-loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //处理less less-loader 
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理图片loader url-loader
            { test: /\.jpg|png|gif$/, use: ['url-loader?limit=470'] },
            //处理js 高级语法 babel-loader exclude排除 node_modules 目录下文件
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
        ]
    }
}