/*
* @Author: Zhu Xiaodong
* @Date:   2018-03-22 17:17:01
* @Last Modified by:   Zhu Xiaodong
* @Last Modified time: 2018-03-22 18:10:39
*/
'use strict';

// mongoose中的模式(schemas)定义文件
// schemas模式只有通过model(编译模型)才能与数据库交互

var mongoose = require('mongoose');

// 定义模式
var MovieSchema = new mongoose.Schema({
	doctor: String,
	title: String,
	language: String,
	country: String,
	summary: String,
	flash: String,
	poster: String,
	year: Number,
	meta:{
		// 创建时间
		createAt:{
			type: Date,
			default: Date.now();
		},
		// 更新时间
		updateAt:{
			type: Date,
			default: Date.now();
		},
	}
})


