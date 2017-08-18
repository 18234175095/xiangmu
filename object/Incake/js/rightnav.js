$(function(){
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
	
	
window.onscroll=function(){
	 	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
	 	if(scrollT>1000){
	 		$(".huitop").show();
	 	}else{
	 		$(".huitop").css("display","none");
	 	}
	 	
	 }

	
	
})