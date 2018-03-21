
'use strict';
// 引入公共模块
require('../module.js');

// 如果webpack中配置有打包css成单独文件的插件,则单独成css文件。否则打包到js文件中。
require('./index.css');

// 这个地方有疑问  (用这种方式引入jquery打包后不能生效)
// var $ = require('jquery');
// $('body').html('HELLO ji INDEX');
// $("body").addClass('111');


// var $ = require('jquery');
// $(function(){
// 	$('body').html('HELLO0 ji INDEX~~~~之选哦的功能');
// })
console.log('index cjs');