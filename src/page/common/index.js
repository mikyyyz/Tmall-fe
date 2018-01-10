/*
* @Author: 小叶
* @Date:   2017-12-05 21:23:51
* @Last Modified by:   mikyyyz
* @Last Modified time: 2017-12-27 19:56:13
*/

'use strict'
require('./layout.css');
require('./header/index.js');
require('./nav-side/index.js');
require('node_modules/font-awesome/css/font-awesome.min.css');
require('./footer/index.css');
var navSide = require('./nav-side/index.js');

navSide.init({
	name : 'user-center'
})


