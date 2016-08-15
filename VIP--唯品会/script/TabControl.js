
//主题颜色
var skinColor= '#f10180';
//基本字号
var baseFontSize = '16px';
//固定内容宽度
var baseWidth = '1000px';
//正常的文本颜色
var normalTextColor = '#666';



function TabControl(){
	
	this.locTabView = new LocationTabView();
	
	this.control();
}

TabControl.prototype.control = function(){
	
	//监听定位的标签，调用触发悬停事件
	$('.header_location').hover(function(){
		
		this.locTabView.load(0);
		
		//bind(this)
	}.bind(this));
}
