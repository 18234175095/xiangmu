$(function(){
	
	var cookie = document.cookie;
		var arrCookie = cookie.split(";");
			for (var i =0;i<arrCookie.length;i++) {
			arrCookie[i]=arrCookie[i].split("=");
		} 
	var User_Name = arrCookie[0][1];
//	var Pass_Word = arrCookie[1][1];
	$(".lk-dlzc").html(User_Name);
	
	$(".lk-li").each(function(index){
		$(this).hover(function(){
			$(".lk-li a").css("text-decoration","none");
			$(".lk-ul").eq(index).stop();
			$(".lk-ul").eq(index).slideDown();
		},function(){
			$(".lk-ul").eq(index).stop();
			$(".lk-ul").eq(index).slideUp("100");
		})
	})
	$(".lk-dzclick").click(function(){
		$('.lk-dzinner').slideDown("slow");
	})
	$("#dizs td").each(function(){
		
		$("#dizs td").click(function(){
			$("#dizs td").css("background","white");
			$(this).css("background","#D1D1D1")
			$("#lk-didian").html($(this).html());
			$('.lk-dzinner').slideUp();
		})
	})
	var flag=true;
	$(".lk-caidan").click(function(){
		if(flag){
			$(".lk-xiala").slideDown();
			flag=false;
		}else{
			$(".lk-xiala").slideUp();
			flag=true;
		}
		
	})
	$(".lk-xiala").click(function(){
		$(".lk-xiala").slideUp()
		flag=true;
	})
	
	//动画开始
	var lkzhang=true;
	$(".lk-an").click(function(){
		if(lkzhang){
		   $(".lk-cenav").animate({
		   	 'right':'0px'
		   })
		   lkzhang=false;
	    }else{
	    	$(".lk-cenav").animate({
		   	 'right':'-43px'
		   })
	    	lkzhang=true;
	    }
	})
	
	$(".huitop").hover(function(){
		$(".huitop").html("返回<br />顶部");
		$(".huitop").css("font-size","12px");
		$(".huitop").css("line-height","19px");
	},function(){
		$(".huitop").html("<i class='am-icon-hand-o-up'></i>");
		$(".huitop").css("font-size","23px");
		$(".huitop").css("line-height","40px");
	})
	$(".lk-an").hover(function(){
		$(".lk-an").html("侧边<br />菜单");
		$(".lk-an").css("font-size","12px");
		$(".lk-an").css("line-height","19px");
	},function(){
		$(".lk-an").html("<i class='am-icon-hand-o-right'></i>");
		$(".lk-an").css("font-size","23px");
		$(".lk-an").css("line-height","40px");
	})
	
	$("#gouwu_che").html("1件");
	$("#shopnum").html("1");
	$(".gouwuc").click(function(){
		window.location.href="gouwuche.html"; 
	})
	$("#denglu").click(function(){
		window.location.href="incake_login.html"; 
	})
	$("#tuichu").click(function(){
		window.location.href="incake_zhuce.html"; 
	})
})