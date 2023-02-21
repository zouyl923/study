//1、使用ES6岛屿语法，岛屿jQuery
import $ from 'jquery'

import './css/index.css'

//2、定义jQuery的入口函数
$(function () {
    $('li:odd').css("background-color", "pink")
    $('li:even').css("background-color", "yellow")
})