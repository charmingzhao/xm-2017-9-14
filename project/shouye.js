var timer = setInterval(autoplay,2000);
var index = 0;
	function autoplay(){
		index++;	
		if(index == $(".banner_1d>div").size()){
			index = 0;
		}
		$(".banner_1d .lunbo").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner_ul li").eq(index).addClass("lunboli").siblings().removeClass("lunboli");	
	}
	
	$(".banner_ul li").mouseenter(function(){
			clearInterval( timer );
			index = $(this).index()-1;
			autoplay()			
	}).mouseleave(function(){
			timer =setInterval(autoplay,2000);
		})
	
	
	$(".banner_1d").mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		timer =setInterval(autoplay,2000);
		})
	
	
	$(".news_2d_top div").mouseenter(function(){
		$(this).addClass("tabs").siblings().removeClass("tabs");
		$(".news_2d_bottom").eq($(this).index()).css("display","block").siblings(".news_2d_bottom").css("display","none")
	})
	
	
	
	var timer1 = setInterval(start,2000);
	var index1 = 0;
	function start(){
		index1++
		if(index1 == 5){
			index1 = 0;
		}
		$(".lunbo2 div a").eq(index1).addClass("luntop").siblings().removeClass("luntop");
		$(".lunbo2 ul").eq(index1).fadeIn(1000).siblings(".lunbo2 ul").fadeOut(1000);
	}

	$(".lunbo2 div a").mouseenter(function(){
		clearInterval(timer1);
		index1 = $(this).index()-1;
		start();
	}).mouseleave(function(){
		timer1 = setInterval(start,2000);
	})
	
	
	$(".lunbo2 ul").mouseenter(function(){
		clearInterval(timer1);
	}).mouseleave(function(){
		timer1 = setInterval(start,2000);
	})
	
	
	
	
	$(".banner_nav a:last").click(function(){
		$("body,html").animate({"scrollTop" : 0},1000,function(){})
	})
	$(window).scroll(function(){
		var sTop = $(document).scrollTop();
		if(sTop<400){
			$(".banner_nav").css("display","none");
		}else{
			$(".banner_nav").css("display","block");
		}
	})
	
	
	
	$(".nav_4d_1d").mouseenter(function(){
		$(".nav_4d_1d ul").css("display","block");
	}).mouseout(function(){
		$(".nav_4d_1d ul").css("display","none");
	})
	
	$(".nav_4d_2d").mouseenter(function(){
		$(".nav_4d_2d ul").css("display","block");
	}).mouseout(function(){
		$(".nav_4d_2d ul").css("display","none");
	})
	
	
	$(".nav_3d_ul>li").mouseenter(function(){
		$(this).css({"background":"#333333","color":"#fff"});
		$(this).find(".nav_3d_left>a").css("color","#fff");
		$(this).find(".nav_3d_left~div").fadeIn(500);
	}).mouseleave(function(){
		$(this).css({"background":"#e3e3e3","color":"#000"});
		$(this).find(".nav_3d_left>a").css("color","#000000");
		$(this).find(".nav_3d_left~div").fadeOut(500);
	})
	
	$(".nav_3d").mouseenter(function(){
		$(".nav_3d_ul").css("display","block");
	}).mouseleave(function(){
		$(".nav_3d_ul").css("display","none");
	})























