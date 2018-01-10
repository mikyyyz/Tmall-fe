/*
* @Author: 小叶
* @Date:   2017-12-26 21:15:24
* @Last Modified by:   小叶
* @Last Modified time: 2018-01-03 22:01:20
*/

'use strict'
require('./index.css');
var _mm = require('util/mm.js')

var header = {
	init : function(){
		this.onLoad();
	    this.bindEvent();         
	},
	//页面加载时回填表单
    onLoad : function(){
        var keyword = _mm.getUrlParam('keyword');
        if (keyword) {
        	$('#search-input').val(keyword);
        }
    },
	bindEvent : function(){
		var _this = this;
		//点击搜索按钮提交
		$('#search-btn').click(function(){
		        _this.searchSubmit(); 
		});
		//按回车键搜索
		$('#search-input').keyup(function(e){
			if(e.keyCode === 13){
				_this.searchSubmit();
			}
		});
		//所搜框绑定一个焦点事件
		$('.search-input').focus(function(){
			$(this).siblings('.fa-times-circle').css("display","block");
		});
		$('.search-input').blur(function(){
			$(this).siblings('.fa-times-circle').css("display","none");
		});
		$('.fa-times-circle').click(function(){
			var $val = $('.search-input').val('');
			if(!$val){
				$(this).css("display","none");
			}
		})
	},
	//搜索提交
	searchSubmit : function(){
	    //获取输入框中的值
		var keyword = $.trim($('#search-input').val());
		//有值就跳转到列列表页
		if (keyword) {
			window.location.href = './list.html?keyword=' + keyword;
			//keyword为空就跳转到首页
		} else {
			_mm.goHome();
		}
	}

}

header.init();