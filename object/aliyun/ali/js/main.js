 function setcookie(name,value){
	document.cookie=name+"="+value;
	}
$(function(){
		var Day=document.getElementById('Day');
	var day=document.getElementById('day');
	var date=new Date();/*时间对象*/
	var riqi;
	riqi=date.getMonth()+1+"."+date.getDate();
	
	Day.innerHTML=riqi;
//			document.write(date.getFullYear()+"年")
//			document.write(date.getMonth()+1+"月");
//			document.write(date.getDate()+"日");
//			document.write("星期" +date.getDay()+" <br /> ");
			switch(date.getDay()){
				case 1:day.innerHTML="星期一";break;				
				case 2:day.innerHTML="星期二";break;	
				case 3:day.innerHTML="星期三";break;	
				case 4:day.innerHTML="星期四";break;	
				case 5:day.innerHTML="星期五";break;	
				case 6:day.innerHTML="星期六";break;	
				case 7:day.innerHTML="星期日";break;	
			}
			
//			document.write(date.getHours()+"点");
//			document.write(date.getMinutes()+"分");			
//			document.write(date.getSeconds()+"秒");


    $(".qiandao").click(function(){
    	$("#PipeoNum").html("已签到1000人");
    	$(".qiandao").css("background","#00C1DE");
    	$(".qiandao").css("color","white");
    })
   
    		var Cookie = document.cookie;
			var arrCookie = Cookie.split(";");
//			alert(arrCookie);
			for (var i =0;i<arrCookie.length;i++) {
				arrCookie[i]=arrCookie[i].split("=");
			}  //[[username,zs][password,123456]]  arrCookie[0][1]
//			alert(arrCookie[2][1]);
   		
   			if(arrCookie[2][1]==1){
				var Title;
    			var Buowen;
				Title=arrCookie[0][1];
				Buowen=arrCookie[1][1];
				var BOKE = document.createElement("div");/*新建BOKE*/
				BOKE.className="boke";
				BOKE.innerHTML=$(".boke")[1].innerHTML;
				BOKE.getElementsByTagName("h1")[0].innerHTML=Title;
				BOKE.getElementsByTagName("p")[0].innerHTML=Buowen;
				
				
				document.getElementsByClassName("Add")[0].appendChild(BOKE);
//				alert(BOKE.innerHTML);
				var len=$(".boke").length-1;
				var Height=$(".center").height();
				var mHeight=$(".boke").eq(len).height();
				Height=Height+mHeight+"px";
				$(".center").css("height",Height);
				
				setcookie("title"," ");
				setcookie("bowen"," ");
				setcookie("flag",' ');
			}	
})