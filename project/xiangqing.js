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
	

	
	
	
	
	
	
	var str = location.href;
	/*http://127.0.0.1/cookie/64/xiangqing.html?id=11*/
	var arr = str.split("?")[1];
	var id = arr.split("=")[1];
	$.ajax({
		type:"get",
		url:"data.json",
		success:function(reg){
			var html = "";
			for(var i in reg.list){			
				if( id == reg.list[i].id ){
					var ch =  reg.list[i];
					html =  `<div class="weizhi">
			<span>您所在的位置</span>><span>韩都衣舍</span>><span>${ch.name}</span>
		</div>
				<div class="middle_left">
				<h1><img src="shouye/xiangqing8.png" /></h1>
				<ul>
					<a href="#"><li>衬衫</li></a>
					<a href="#"><li>呢大衣</li></a>
					<a href="#"><li>棉衣</li></a>
					<a href="#"><li>背心/马甲</li></a>
					<a href="#"><li>卫衣</li></a>
					<a href="#"><li>T恤</li></a>
					<a href="#"><li>羽绒服</li></a>
					<a href="#"><li>毛衣/针织衫</li></a>	
					<a href="#"><li>夹克</li></a>	
				</ul>
				<a href="#"><img src="shouye/xiangqing9.jpg" /></a>
			</div>
			<div class="middle_center">
				<div class="zhongimg">
					<img src="shouye/${ch.src}" />
					<div id="layer"></div>
					<div id="mask" style="background: url(shouye/${ch.src}); background-size: 450px 400px;"></div>
				</div>
				<div class="xiaoimg">
					<ul>
						<li><a href="#"><img src="shouye/${ch.src}" /></a></li>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
					</ul>
					<div>
						<span>收藏(0)</span>
						<a href="" style="background: url(shouye/xiangqing5.png) no-repeat 0 5px;"></a>
						<a href="" style="background: url(shouye/xiangqing5.png) no-repeat 0 -75px;"></a>
						<a href="" style="background: url(shouye/xiangqing5.png) no-repeat 0 -115px;"></a>
						<a href="" style="background: url(shouye/xiangqing5.png) no-repeat 0 -235px;"></a>
						<a href="" style="background: url(shouye/xiangqing5.png) no-repeat 0 -195px;"></a>
						<a href="" style="background: url(shouye/xiangqing5.png) no-repeat 0 -px;"></a>
					</div>
				</div>
				<div class="daimg">
					<img src="shouye/${ch.src}" class="dai" />
				</div>
			</div>
			<div class="middle_right">
				<div class="right_top">
					<ul>
						<li><h2 class="name">${ch.name}</h2></li>
						<li>
							商品货号：&nbsp;&nbsp;<span class="code">${ch.code}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                         	售价: ￥<span class="price">${ch.price}</span>
                        </li>
						<li>促 销 价：<span class="promote_price">￥${ch.promote_price}</span></li>
						<li>销　　量：&nbsp;&nbsp;<span class="sale_count">2件</span> </li>
					</ul>
				</div>
				<div class="right_center">
					<ul>					
						<li>尺　　码： <span>S</span><span>M</span><span>L</span><span>XL</span></li>
						<li>颜　　色：<span>蓝色</span></li>
						<li>数　　量：<span class="updateCount" id="jian">-</span>
							<input type="text" value="1"  class="shop-count" />
							<span class="updateCount" id="jia">+</span>
						</li>
					</ul>
					<div>
						<a href="#" id="goumai"><img src="shouye/xiangqing2.png" /></a>
						<span style="display:none;" data-id=${ch.id} data-name=${ch.name} data-price1 = ${ch.promote_price} data-price = ${ch.price} data-src= ${ch.src}></span>
						<a href="#" id="shopcar"><img src="shouye/xiangqing1.png" /></a>
					</div>
				</div>
				<div class="right_bottom">
					            
           
				</div>
			</div>` 
				}
			}
			$("#middle").html(html);
			
			
			$(".zhongimg").mouseenter(function(){
			$(".daimg").show();
			$("#layer").show();
			$("#mask").show();
		}).mouseleave(function(){
			$(".daimg").hide();
			$("#layer").hide();
			$("#mask").hide();
		}).mousemove(function(e){
			var e = e ||event;
			var x = e.pageX - $(".middle_center").offset().left-$("#mask").width()/2;
			var y = e.pageY - $(".middle_center").offset().top-$("#mask").height()/2;
			var maxL = $(".zhongimg").width()-$("#mask").width();
			var maxT = $(".zhongimg").height()-$("#mask").height();
			x =Math.min( maxL , Math.max( 0 ,x ) ); 
			y =Math.min( maxT , Math.max( 0 ,y ) ); 
			$("#mask").css({
				left : x ,
				top : y ,
				backgroundPositionX : -x,
				backgroundPositionY : -y
			})
			
			var bigImgX = x*$(".dai").width()/$(".middle_center").width();
			var bigImgY = y*$(".dai").height()/$(".middle_center").height();
			$(".dai").css({
				left : -bigImgX,
				top : -bigImgY
			})
		})
		
		
		
		//加减操作
		var num = 1;
		$("#jia").click(function(){
			num++
			$(".shop-count").val(num);
		})
		$("#jian").click(function(){			
			if(num < 2 ){
				$(".shop-count").val(1);
				return;
			}
			num--
			$(".shop-count").val(num);
		})
		$("#shopcar").click(function(){
			var num1 = Number(num); 
			var arr = [];
			var flag = true;
			var _json = {
				id : $(this).prev().data("id"),
				name : $(this).prev().data("name"),
				src : $(this).prev().data("src"),
				price : $(this).prev().data("price"),
				price1 : $(this).prev().data("price1"),
				count : num1
			}
			
			var cookieInfo = getCookie("list");
			if(	cookieInfo.length != 0){
				arr = cookieInfo;
				for(var i in arr){
					if(_json.id == arr[i].id ){
						arr[i].count += num1 ;
						flag = false ; 
						break;
					}
				}
			}
			
			if(flag){
				arr.push(_json);
			}
			setCookie("list",JSON.stringify(arr));
			
			var go = confirm("是否继续购买?确定--继续购买，取消---去购物车结算");
			if(!go){
				location.href = "shop.html";
			}
			if(go){
				location.href = "shouye.html";
			}
		})
		
		
		
		
		}
	})














