/*
* @Author: 小叶
* @Date:   2017-12-20 19:07:00
* @Last Modified by:   小叶
* @Last Modified time: 2017-12-20 19:44:58
*/


'use strict'
var _mm = require('util/mm.js');
var _user = {
	checkLogin : function(resolve,reject){
		_mm.request({
			url : _mm.getServerUrl('/user/get_user_info.do'),
			method : 'POST',
			success : resolve,
			error : reject
		})
	}
}

module.exports = _user;