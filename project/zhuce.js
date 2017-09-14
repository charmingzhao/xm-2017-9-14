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
	

	$(".middle_right_top>div").eq(0).click(function(){
		$(this).addClass("phone").siblings().removeClass("phone");
		$(".qiehuan>div").eq(0).css("display","block").siblings().css("display","none");
	})
	
	$(".middle_right_top>div").eq(1).click(function(){
		$(this).addClass("phone").siblings().removeClass("phone");
		$(".qiehuan>div").eq(1).css("display","block").siblings().css("display","none");
	})

	
		var flag = true;
		$("#phone1").blur(function(){
			var reg = /^13\d{9}$/
			var str = $("#phone1").val();
			if(!reg.test(str)){
				$(".phone_").show().css("color","red");
				flag = false;
			}else{
				$(".phone_").hide();
				$(".phone_1").show();
				flag = true;
			}
		})
		var flag1 = true;
		$("#phone_yz").blur(function(){
			var reg = /^\d{6}$/
			var str = $("#phone_yz").val();
			if(!reg.test(str)){
				$("#phone2").show().css("color","red");
				flag1 = false;
			}else{
				$("#phone2").hide();
				$("#phone_yz_i").show();
				flag1 = true;
			}
		})
		var flag2 = true;
		$("#phone_pwd").blur(function(){
			var reg = /^.{6,10}$/
			var str = $("#phone_pwd").val();
			if(!reg.test(str)){
				$("#phone_pwd_s").show().css("color","red");
				flag2 = false;
			}else{
				$("#phone_pwd_s").hide();
				$("#phone_pwd_i").show();
				flag2 = true;
			}
		})
		var flag3 = true;
		$("#phone_pwd2").blur(function(){
			if($("#phone_pwd2").val()!==$("#phone_pwd").val()){
				$("#phone_pwd2_s").show().css("color","red");
				$("#phone_pwd2_i").hide();
				flag3 = false;
			}else{
				$("#phone_pwd2_s").hide();
				$("#phone_pwd2_i").show();
				flag3 = true;
			}
		})
		
		$("#phone_sub").click(function(){
			if(flag&&flag1&&flag2&&flag3){
				document.cookie = "phoneid="+ $("#phone1").val();
				document.cookie = "phonepwd="+ $("#phone_pwd").val();
				window.location.href = "zhuceok.html"
			}
		})
		
		
		var flag4 = true;
		$("#email").blur(function(){
			var reg = /^\w+@\w+(\.\w+)+$/
			var str = $("#email").val();
			if(!reg.test(str)){
				$("#email_id_s").show().css("color","red");
				flag4 = false;
			}else{
				$("#email_id_s").hide();
				$("#email_id_i").show();
				flag4 = true;
			}
		})
		var flag5 = true;
		$("#email_pwd").blur(function(){
			var reg = /^.{6,10}$/
			var str = $("#email_pwd").val();
			if(!reg.test(str)){
				$("#email_pwd_s").show().css("color","red");
				flag5 = false;
			}else{
				$("#email_pwd_s").hide();
				$("#email_pwd_i").show();
				flag5 = true;
			}
		})
		var flag6 = true;
		$("#email_pwd2").blur(function(){
			if($("#email_pwd2").val()!==$("#email_pwd").val()){
				$("#email_pwd2_s").show().css("color","red");
				$("#email_pwd2_i").hide();
				flag6 = false;
			}else{
				$("#email_pwd2_s").hide();
				$("#email_pwd2_i").show();
				flag6 = true;
			}
		})
		var flag7 = true;
		$("#email_yz").blur(function(){
			if($("#email_yz").val()!== "trby"){		
				flag7 = false;
			}else{		
				flag7 = true;
			}
		})

		$("#email_sub").click(function(){
			if(flag4&&flag5&&flag6&&flag7){
				document.cookie = "emailid="+ $("#email").val();
				document.cookie = "emailpwd="+ $("#email_pwd").val();
				window.location.href = "zhuceok.html"			
			}
		})
		
		
		

		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	








