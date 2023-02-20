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
    }
}