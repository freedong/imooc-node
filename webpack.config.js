
var webpack = require('webpack');
var path = require('path');
var config = {
	// 多文件打包
	// 入口文件
	entry:{
		'index' : ['./src/page/index/index.js'],
		'login' : ['./src/page/login/index.js'],
	},
	// 输出文件
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'js/[name].js'
	},

	// 外部扩展
	externals:{
		'jquery' : 'window.jQuery'
	}
}

module.exports = config;