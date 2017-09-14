$(function(){
	var arr = getCookie("list");
	var html = "";	
	for(var i in arr){
		var shopinfo = arr[i];
		html +=`<ul class="middle_u">
					<li>
						<img src="shouye/${shopinfo.src}" />
						<a href="#">${shopinfo.name}</a>
					</li>
					<li>
						<span class="price">¥ ${shopinfo.price}</span>
						<span class="price1">¥ ${shopinfo.price1}</span>
					</li>
					<li>
						<span class="jian">-</span><input type="text" value="${shopinfo.count}" class="shop_count" /><span class="jia">+</span>
					</li>
					<li>
						<span class="money">¥ ${shopinfo.price1*shopinfo.count}</span>
					</li>
					<p style="dispaly:none;" id="p" data-num =${shopinfo.count} data-price = ${shopinfo.price1*shopinfo.count} data-id=${shopinfo.id} data-money=${shopinfo.price1}></p>
					<li class="shanchu"><span class="del">删除</span></li>
					<li></li>
				</ul>`
		
	}
	$(".middle").html(html);
	var a = 0;
	var b = 0;
	for(var i in arr){			
			a += arr[i].count;	
			b += arr[i].count * arr[i].price1 
	}
	
	$("#zongnum").html(a);
	$("#zongprice").html(b);
	$("#zongprice1").html(b);
	
	$(".shanchu").click(function(){
		var id = $(this).prev().data("id");
		for(var i in arr){
			if(id == arr[i].id){
				arr.splice(i,1);
				setCookie("list",JSON.stringify(arr));
				$(this).parent().remove();
			}
		}
	})
	
	$(".jian").click(function(){
		var money = $(this).parent().parent().find("p").data("money"); 
		var sc = $(this).next().val();
		sc--
		if(sc < 2 ){
			sc = 1;
		}
		$(this).next().val(sc);
		$(this).parent().parent().find(".money").html(sc*money);
		$("#zongnum").html(sc);
	})
	
	
	
	$(".jia").click(function(){
		var money = $(this).parent().parent().find("p").data("money");
		var sc = $(this).prev().val();
		sc++
		$(this).prev().val(sc);
		$(this).parent().parent().find(".money").html(sc*money);
		$("#zongnum").html(sc);
	})
})
