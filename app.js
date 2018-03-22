/*
* @Author: Zhu Xiaodong
* @Date:   2018-03-22 10:43:52
* @Last Modified by:   Zhu Xiaodong
* @Last Modified time: 2018-03-22 17:03:31
*/


'use strict';

// 入口文件

var express = require('express');//引入express框架
var bodyParser = require('body-parser');//引入第三方插件body-parser
var path = require('path');//引入路径模块
var port = process.env.PORT || 3000;//获取端口
var app = express();//执行express框架(启动一个web服务器)

app.set('views','./views/pages/');//设置views文件夹(即模板文件夹),也是设置视图的根目录
app.set('view engine','jade');//设置模板引擎
// app.use(express.bodyParser());//提交表单格式化插件bodyParser(第三方插件)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(path.join(__dirname,'bower_components')));//设置静态资源路径
app.listen(port);//监听端口

console.log('imooc started on port ' + port);


// 编写路由代码
// 伪造数据
//index page
app.get('/',function(req,res){
	res.render('index',{
		title: 'imooc 首页',
		movies: [{
			title: '机械战警',
			_id: 1,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		},{
			title: '机械战警',
			_id: 2,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		},{
			title: '机械战警',
			_id: 3,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		},{
			title: '机械战警',
			_id: 4,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		},{
			title: '机械战警',
			_id: 5,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		},{
			title: '机械战警',
			_id: 6,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
		}]
	})
})


//detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title: 'imooc 详情页',
		movie: {
			doctor: "1",
			country: "美国",
			title: "机械战警",
			year: 2014,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5",
			language: '英语',
			flash: "http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
			summary: "描述"
		}
	})
})

//admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title: 'imooc 后台录入页',
		movie: {
			doctor: "",
			country: "",
			title: "",
			year: '',
			poster: '',
			language: '',
			flash: '',
			summary: ""
		}
	})
})

//list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title: 'imooc 列表页',
		movies: [{
			_id: 1,
			doctor: "1",
			country: "美国",
			title: "机械战警",
			year: 2014,
			poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5",
			language: '英语',
			flash: "http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
			summary: "描述"
		}]
	})
})