/*
* @Author: 小叶
* @Date:   2017-12-05 18:23:30
* @Last Modified by:   小叶
* @Last Modified time: 2017-12-06 20:13:05
*/

const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

//环境配置“dev”以及“online”
const WEBPACK_ENV       = process.env.WEBPACK_ENV || 'dev';

//获取html-webpack-plugin参数方法
const getHtmlConfig = function(title,name){
    return {
    	title    : title,
    	template : './src/view/' + name +'.html',
		filename : 'view/' + name +'.html',
		inject   : true,
		hash     : true,
		chunks   :['common',name]
    }
}

var config = {
	entry : {
		'common': ['./src/page/common/index.js'],
		'index' : ['./src/page/index/index.js'],
		'login' : ['./src/page/login/index.js'],
	},
	output : {
		path : __dirname + '/dist/',
		publicPath : '/dist/',
		filename : 'js/[name].js'
	},
	externals : {
		'jquery' : 'window.jQuery'
	},
    module : {
    	loaders : [
    	    {test:/\.css$/,loader:ExtractTextPlugin.extract('style-loader','css-loader')},
    	    {test:/\.(jpg|png|gif|woff|svg|eot|ttf)\??.*$/,loader:'url-loader?limit=100&name=resource/[name].[ext]'}           
    	]
    },
	plugins : [
	    //公共模块单独打包
        new webpack.optimize.CommonsChunkPlugin({
        	name : 'common', //公共模块名称
        	filename : 'js/base.js' //模块的文件名称
        }),
        //抽离css样式，防止将样式打包进js中导致页面错乱
        new ExtractTextPlugin('css/[name].css'),
        //html模板的处理
        new htmlWebpackPlugin(getHtmlConfig('首页','index')),
        new htmlWebpackPlugin(getHtmlConfig('登录','login'))
	]
}

if('dev' === WEBPACK_ENV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:6080/');
}

module.exports = config;