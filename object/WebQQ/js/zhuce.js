window.onload=function(){
	 /*cookie*/
    function setcookie(name,value){
			document.cookie=name+"="+value;
		}

 //[[username,zs][password,123456]]  arrCookie[0][1]
 
 
   /*cookie*/
	var Zcname=document.getElementById("zcname");
	var Zcmima=document.getElementById("zcmima");
	var Qrmima=document.getElementById("qrmima");
	var Sub=document.getElementById("sub");
	var Text=document.getElementsByClassName("text");
	var flag=false;
	Zcname.onfocus=function(){
		Text[0].innerHTML="请输入6~10位数字";
	}
	Zcname.onblur=function(){
		if(Zcname.value==""){
			Text[0].innerHTML="<span>注册名不能为空</span>";
		}else if(/^\d+$/.test(Zcname.value)){
					if(Zcname.value.length<6||Zcname.value.length>10){
						Text[0].innerHTML="<span>账号格式不正确</span>";
					}else{
						Text[0].innerHTML="<label>√</label>";
						$("#jindu").val(10);
						$("#jindu2").html("10");
					}
			}else{
				Text[0].innerHTML="<span>请输入6~10位数字<span>";
			}
		}
			
	Zcmima.onfocus=function(){
		Text[1].innerHTML="请输入数字和字母的组合";
	}
	Zcmima.onblur=function(){
		if(Zcmima.value==""){
			Text[1].innerHTML="<span>密码不能为空</span>";
		}else if(/^[A-Za-z0-9]+$/.test(Zcname.value)){
					if(Zcmima.value.length<6){
						Text[1].innerHTML="<span>密码太短</span>";
					}else{
						Text[1].innerHTML="<label>√</label>";
						$("#jindu").val(20);
						$("#jindu2").html("20");
					}
			}else{
				Text[1].innerHTML="<span>请输入数字和字母的组合<span>";
			}
		}
		
	
	Qrmima.onfocus=function(){
		Text[2].innerHTML="请输入确认密码";
	}
	Qrmima.onblur=function(){
		if(Qrmima.value==""){
			Text[2].innerHTML="<span>确认密码不能为空</span>";
		}else if(/^[A-Za-z0-9]+$/.test(Qrmima.value)){
					if(Qrmima.value!=Zcmima.value){
						Text[2].innerHTML="<span>确认密码错误</span>";
					}else{
						Text[2].innerHTML="<label>√</label>";
						$("#jindu").val(30);
						$("#jindu2").html("30");
						flag=true;
					}
			}
		}
		
	
	
	Sub.onclick=function(){
		if(flag){
		setcookie("name",Zcname.value);
		setcookie("password",Zcmima.value);
//		var cookie = document.cookie;
//		var arrCookie = cookie.split(";");
//			for (var i =0;i<arrCookie.length;i++) {
//			arrCookie[i]=arrCookie[i].split("=");
//		} 
//		alert(arrCookie[0][1]);
//		alert(arrCookie[1][1]);
		setcookie("flag","1");
		window.location.href="index.html"; 
//		alert(document.cookie);
		}else{
			alert("请确认注册信息");
		}
		
	}
	
	
	
	
	
}
