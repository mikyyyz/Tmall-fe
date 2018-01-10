/*
* @Author: 小叶
* @Date:   2017-12-13 16:14:34
* @Last Modified by:   小叶
* @Last Modified time: 2017-12-20 15:26:30
*/


"use strict"


var Hogan = require('hogan.js');
var conf = {
	serverHost : '',
}

var _mm = {
	//网络接口请求
	request : function(param){
        var _this = this;
		$.ajax({ 
			type     : param.type     || 'GET',
			url      : param.url      || '',
			dataType : param.dataType || 'json',
			data     : param.data     || '',
			success  : function(res){
				//请求成功
				if(0 === res.status){
					typeof param.success === 'function' && param.success(res.data,res.msg); 
				//没有登录状态，强制登录	
				} else if(10 === res.status){
					_this.doLogin();
				//请求数据错误
				} else if(1 === res.status){
					typeof param.error === 'function' && param.error(err.msg);
				}
			},
			error    : function(err){
				typeof param.error === 'function' && param.error(err.statusText);
			}
		})
	},
	//获取服务器地址
	getServerUrl : function(path){
		return conf.serverHost + path;
	},
	//获取URL中的参数
	getUrlParam : function(name){
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var result = window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	},
	//成功提示操作方法
	successTips : function(msg){
		alert(msg || '操作成功！');
	},
	errorTips : function(msg){
		alert(msg || '哪里不对了~~');
	},
	validate : function(value,type){
		var value = $.trim(value);
		if('require' === 'type'){
			return !!value;
		}
		if('phone' === 'type'){
			return /^1{10}$/.test(value);
		}
		if('email' === 'type'){
			return /^(\w)+(\.\w+)*@(\w)+(\.\w{2,3}){1,3}$/.test(value);
		}
	},
	//渲染HTML模板
	renderHtml : function(htmlTemplate,data){
		var template = Hogan.compile(htmlTemplate);
		var result   = template.render(data);
		return result;
	},
	doLogin : function(){
		window.location.href = './login.html?redireact=' + encodeURIComponent(window.location.href);
	},
	goHome : function(){
		window.location.href = './index.html';
	}

}

module.exports = _mm;