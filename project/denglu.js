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
	

	$("#usub").click(function(){
		var str = document.cookie;
		var arr = str.split(";");
		for(var i = 0; i<arr.length ; i++){
			var item = arr[i].split("=");
			if( $("#uname").value == item[1] && $("#upwd").value == item[1] ){
			location.href = "shouye.html";
			}
		}
		
	})


















