function setcookie(name,value){
	document.cookie=name+"="+value;
}

var User_Name="admin";
var Pass_Word="admin";
var flag_dl=false;
var usname="";
var Pasword="";
function alerts(text){
		if(text!="")
		$("#alert-text").html(text);
		$("#my-alert").modal();
	}
$(function(){
	
		 /*cookie*/
    	setcookie("name","admin");
		setcookie("password",'00000');

		var cookie = document.cookie;
		var arrCookie = cookie.split(";");
			for (var i =0;i<arrCookie.length;i++) {
			arrCookie[i]=arrCookie[i].split("=");
		} 
		User_Name=arrCookie[0][1]
		Pass_Word=arrCookie[1][1];
		
		$("#user").html(arrCookie[0][1]);
	
	
	$("#Denglu_").click(function(){
		usname=$("#txt_Name").val();
		Pasword=$("#txt_pass").val();
		if(usname==User_Name){
			if(Pasword=="admin"||Pasword==00000){
				alerts("登录成功！")
				flag_dl=true;
				setcookie("name",usname);
				setcookie("password",Pasword);
				window.location.href="index.html"; 
				
			}else{
				alerts("密码错误！")
			}
		}else{
			alerts("用户名不正确！");
		}
	})
	
	
/*修改密码*/
//alert(Pass_Word)
$("#jiu_pass").blur(function(){
	if($("#jiu_pass").val()==Pass_Word||$("#jiu_pass").val()=="admin"){
		
	}else{
		alerts("旧密码不正确！");
		$("#jiu_pass").val("");
	}
})
	$("#new_pass").blur(function(){
		if($("#new_pass").val().length<5){
			alerts("密码长度最少为5");
			$("#new_pass").val("")
		}
	})
	$("#new_passs").blur(function(){
		if($("#new_passs").val()!=$("#new_pass").val()){
			alerts("两次填写密码不一致！");
			$("#new_passs").val("")
		}
	})
	$("#change-mima").click(function(){
		var jiu=$("#jiu_pass").val();
		var xin=$("#new_pass").val();
		var xins=$("#new_passs").val();
		if(jiu!=""&&xin!=""&&xins!=""){
			setcookie("password",xin);
			alerts("密码修改成功！")
		}else{
			alerts("请确认填写密码！")
		}
	})
	



/*修改密码*/
	
	
	
})


