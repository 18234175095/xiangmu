$(function(){
	var flag=true;
	$(".minu").click(function(){	
		if(flag){
			$(".minute2-inn").slideDown();
			flag=false;
		}else{
			$(".minute2-inn").slideUp();
			flag=true;
		}
	})
	
//	$(".banner")
})