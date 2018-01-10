/*
* @Author: 小叶
* @Date:   2018-01-03 22:08:20
* @Last Modified by:   小叶
* @Last Modified time: 2018-01-10 20:26:22
*/

'user strict'

require('./index.css');
require('page/common/nav/index.js');
var _mm = require('util/mm.js');

$(function(){
	var type = _mm.getUrlParam('type') || 'default';
	$element = $('.' + type + '-success').show();
})
