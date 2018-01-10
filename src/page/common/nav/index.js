/*
* @Author: 小叶
* @Date:   2017-12-20 17:34:41
* @Last Modified by:   小叶
* @Last Modified time: 2017-12-20 19:43:16
*/

'use strict'
require('./index.css');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');

var nav = {
	init : function(){
		this.bindEvent();
		this.loadCartCount();
		this.loadUserInfo();

		return this;
	},
	bindEvent : function(){
		$('.js-login').click(function(){
			_mm.doLogin();
		});
		$('.js-rejister').click(function(){
			window.location.href = './register.html';
		});
		$('.js-logout').click(function(){
			window.location.reload();
		},function(errMsg){
			_mm.errorTips(errMsg);
		})
	},
	loadUserInfo : function(){
        _user.checkLogin(function(res){
        	$('.user.not-login').hide().siblings('.user.login').show().find('.username').text(res.username)
        },function(errMsg){
            //do Nothing
        })
	},
	loadCartCount : function(){
	    _cart.getCartCount(function(res){
	    	$('.cart-count').text(res || 0);
	    },function(errMsg){
	    	$('.cart-count').text(0);
	    }) 
	}
}

module.exports = nav.init();