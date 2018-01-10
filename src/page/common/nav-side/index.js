/*
* @Author: 小叶
* @Date:   2017-12-27 18:11:48
* @Last Modified by:   mikyyyz
* @Last Modified time: 2017-12-27 19:56:48
*/


require('./index.css');
var _mm = require('util/mm.js');
var templateIndex = require('./index.string');
   
var navSide = {
	option : {
    	name : '',
    	navList : [
            {name:'user-center',desc:'用户中心',url:'./user-center.html',className:'fa fa-home'},
            {name:'order-list',desc:'我的订单',url:'./order-list.html',className:'fa fa-tags'},
            {name:'pass-update',desc:'修改密码',url:'./pass-update.html',className:'fa fa-user-o'},
            {name:'about',desc:'关于Tmall',url:'./about.html',className:'fa fa-bars'}
    	]
    },
	init : function(option){
		//合并选项
		$.extend(this.option,option)
		this.renderNav();
	},
	//渲染导航菜单
	renderNav : function(){
        //遍历navList中的选项，计算Active数据
        for(var i = 0, len = this.option.navList.length; i < len; i++){
        	if(this.option.navList[i].name == this.option.name){
        		this.option.navList[i].isActive = true;
        	}
        }
        //渲染list数据
        var navHtml = _mm.renderHtml(templateIndex,{
        	navList : this.option.navList
        });
        //将数据插入到ul中
        $('.nav-side').html(navHtml);
	}
}

module.exports = navSide;