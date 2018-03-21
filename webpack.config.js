
var webpack 					= 	require('webpack'); //引入webpack模块
var path 						= 	require('path'); //引入path路径模块
var ExtractTextPlugin 			= 	require('extract-text-webpack-plugin'); //css文件单独打包插件
var HtmlWebpackPlugin 			= 	require('html-webpack-plugin'); //html处理插件 
// html-webpack-plugin   html处理插件是支持ejs语法的,所以可以在html页面中使用ejs语法。

// 环境变量配置,dev(开发环境)/online(线上环境)
// 获取环境变量是开发环境(dev)还是在线环境(online).
var WEBPACK_ENV					=	process.env.WEBPACK_ENV || 'dev';//使用nodejs对象获取环境变量,默认情况下是dev环境
console.log(WEBPACK_ENV);

// 封装获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name){
	return {
		template	:   './src/view/'+ name +'.html',//原始文件
    	filename	:   'view/'+ name +'.html',//目标文件
    	inject		:    true,//js插入到body中,css插入到head中
    	hash		:    true,//后缀加hash值
    	chunks 		:    ['common',name] //需要打包到html中的文件
	}
}

// webpack config
var config = {
	// 多文件打包方式
	// 入口文件
	entry:{
		//'webpack-dev-server/client?http://localhost:8088/'放在公共文件中便于启动每一个文件(因为每个页面都会添加这一部分)
		//webpack-dev-server --inline --port 8088(cmd输入命令)  开发环境方式的配置(修改文件自动刷新)
		// 'common' :  ['./src/page/common/index.js','webpack-dev-server/client?http://localhost:8088/'],// 公共模块文件
		'common' :  ['./src/page/common/index.js'],// 公共模块文件
		'index'  :  ['./src/page/index/index.js'],
		'login'  :  ['./src/page/login/index.js'],
	},
	// 输出文件
	output:{
		path:path.resolve(__dirname,'./dist'),//存放文件的路径
		publicPath : '/dist/',//在线访问文件的路径
		filename:'js/[name].js'
	},
	// loader配置
	module: {
		loaders: [
			// css 打包到js中
			// { test: /\.css$/, loader: "style-loader!css-loader" }
			// css 单独打包
		    { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
		    // 图片和(引用)字体的处理  url-loader后面的条件是图片小于100的打包成base64的图片在样式中,大于的则单独放在文件夹中,name表示的是文件夹名字和图片名字以及扩展名
		    // 问题1：图片路径有问题,解决方式：在output配置publicPath即可
		    // 问题2：怎么压缩图片,
		    { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=1000&name=image/[hash:8].[name].[ext]' }//?limit=100&name=resource/[name].[ext] 加上这部分后需要安装一个file-loader插件才能成功执行
		]
	},

	// 外部扩展
	externals:{
        'jquery':'window.jQuery'
    },

    // 插件
    plugins: [
    	//提取代码的公共js部分 
    	new webpack.optimize.CommonsChunkPlugin({
    		name : 'common',
    		filename : 'js/base.js'
    	}),
    	// 打包css成单独文件的插件(打包时出错element.loader.split is not a function,极可能是插件版本(3.0.2出错)和webpack版本不对(ExtractTextPlugin1.0.1成功))
    	new ExtractTextPlugin("css/[name].css"),
    	// html模板的处理
    	// new HtmlWebpackPlugin({
    	// 	template	:   './src/view/index.html',//原始文件
    	// 	filename	:   'view/index.html',//目标文件
    	// 	inject		:    true,//打包到body中
    	// 	hash		:    true,//后缀加hash值
    	// 	chunks 		:    ['common','index'] //需要打包到html中的文件
    	// }),
    	new HtmlWebpackPlugin(getHtmlConfig('index')),
    	new HtmlWebpackPlugin(getHtmlConfig('login')),
    ]
}

//如果是开发环境(dev)则添加上'webpack-dev-server/client?http://localhost:8088/'.如果是线上环境(online),则不需要添加
if("dev" === WEBPACK_ENV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;