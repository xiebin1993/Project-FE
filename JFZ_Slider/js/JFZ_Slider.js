
;(function($){
	
	$.fn.jfz_slider = function(){
		
		var $plugin = this;
			$ul_cnt = $plugin.find("ul.slider_cnt"),
			$lis = $ul_cnt.find("li"),
			len = $lis.length;
		
		var ul_root = "<ul class='num'>",
			$ul_num = null,
			$li_num = null;
		
		for(var i = 0; i < len; i++){
			ul_root += "<li>"+(i+1)+"</li>" 
		}
		
		ul_root += "</ul>";
		$plugin.append(ul_root);
		$ul_num = $plugin.find("ul.num");
		$li_num = $ul_num.find("li");
		
		return this.each(function(){
			
			var index = 0,
				Timer = null;
			
			$lis.eq(index).show();
			$li_num.eq(index).addClass("on");
			
			$li_num.bind('mouseover',function(){
				index = $li_num.index(this);
				showImg(index);
			});
			
			$plugin.hover(function(){
				clearInterval(Timer);
			},function(){
				Timer = setInterval(function(){
					showImg(index);
					index++;
					
					if(index == len)
						index = 0;
				},3000);
			}).trigger("mouseleave");	
			
		});	
		
		function showImg(index){
			$lis.eq(index).show().siblings().hide();
			$li_num.removeClass("on").eq(index).addClass("on");
		}
	}
		
})(jQuery);
