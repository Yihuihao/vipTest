
function MoreTabView(){
	
	TabView.call(this);
}

MoreTabView.prototype = Object.create(TabView.prototype);
MoreTabView.prototype.constructor = MoreTabView;

MoreTabView.prototype.load = function(){
	
	TabView.prototype.load.call(this);
	
	//获取“更多”按钮的右边距窗口的距离
	var moreRight = document.querySelector('.more-show').getBoundingClientRect().right;
	var left = moreRight - ('.more-modal').innerWidth() + 'px';
	
	$('.more-modal').show().css({
		left:left
	});
	
}

MoreTabView.prototype.unload = function(){
	TabView.prototype.unload.call(this);
	
	$('.more-modal').hide();
}
