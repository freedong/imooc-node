/*
* @Author: Zhu Xiaodong
* @Date:   2018-03-20 10:47:55
* @Last Modified by:   Zhu Xiaodong
* @Last Modified time: 2018-03-21 14:48:32
*/

'use strict';
// 引入公共模块
require('../module.js');
// 如果webpack中配置有打包css成单独文件的插件,则单独成css文件。否则打包到js文件中。
require('./index.css');

console.log('hello index');