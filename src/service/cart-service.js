/*
* @Author: 小叶
* @Date:   2017-12-20 19:27:54
* @Last Modified by:   小叶
* @Last Modified time: 2017-12-20 19:45:17
*/

'use strict'
var _mm = require('util/mm.js');

var _cart = {
	getCartCount : function(resolve,reject){
		_mm.request({
			url : _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success : resolve,
			error : reject
		})
	}
}

module.exports = _cart;