
function LocationTabView(){
	
	TabView.call(this);
}

//实现原型链继承
LocationTabView.prototype = Object.create(TabView.prototype);
LocationTabView.prototype.constructor = LocationTabView;

/*
 * 重写父类的load方法
 */
LocationTabView.prototype.load = function(index){
	
	//部分重写（获取数据）
	TabView.prototype.load.call(this,index);
	
	var locationDiv = document.querySelector('.header_location');
	
	console.log('>>>>>>>' + locationDiv);
	
	
	var left = locationDiv.getBoundingClientRect().left + 'px';
	var top =locationDiv.getBoundingClientRect().bottom + 'px';
	
	console.log(left+'|||' + top);
	
	/*
	//监听窗口变换
	$(window).resize(function(){
//		alert('xxxx');
		
		left = locationDiv.getBoundingClientRect().left + 'px';
		top =locationDiv.getBoundingClientRect().bottom + 'px';
	
		
	})
	*/
	
	
	if(this.$tab){
		
		this.$tab.show().css({
			left:left,
			top:top
		});
		return;
	}
	
	
	//创建locationTabView的界面(this.$tab作为全局变量)
	this.$tab = $("<div class='locationBox'>").css({
		border:'1px solid silver',
		backgroundColor:'#fff',
		position:'absolute',
		left:left,
		top:top
//		left:'100px',
//		top:'30px'
	}).appendTo($('body')).append($("<ul class='cityList'>").css({
		listStyleType:'none',
//		padding:0
	})).hover(function(){
		
		$(this).show();
		
	},function(){
		$(this).hide();
	});
	
	console.log(this.datas);
	//遍历城市列表对象
	for(var keyName in this.datas){
		
		
		console.log(keyName);
		
		var aLi = $('<li>')
//		.css()
		.append($('<span>').css({
			color:'#000',
			fontSize:'0.8rem',
			display:'inline-block',
			width:'30px',
			textAlign:'center',
			lineHeight:'25px'
		}).text(keyName)).appendTo($('.cityList'));
		
		//根据属性名keyNameABCD获取对应的ABCD城市数组
		var cities = this.datas[keyName];
		
		var lastClickSpan = 0;
		for(var i = 0;i < cities.length; i++){
			
			var title = cities[i];
			
			$('<span>').css({
				color:normalTextColor,
				fontSize:'0.8rem',
				padding:'0 10px',
				textAlign:'left',
				lineHeight:'25px'
			}).text(title).appendTo($(aLi)).click(function(){
				
				$('.header_location a').text($(this).text());
				$(this).css({
					backgroundColor:skinColor,
					color:'#fff'
				}).addClass('clicked');
				
				$(lastClickSpan).css({
					backgroundColor:'',
					color:normalTextColor
				}).removeClass('clicked');
				
				lastClickSpan = $(this);
				
				
			}).hover(function(){
				if ($(this).attr('class') == 'clicked') {
					$(this).css('color','#fff');
				}else{
					$(this).css('color',skinColor);
				}
				
				
			},function(){
				if ($(this).attr('class') == 'clicked') {
					$(this).css('color','#fff');
				}else{
				$(this).css('color',normalTextColor);
				}
				
			});
			
		}
	}
	
	
}













