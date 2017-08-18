$(function(){
	
	var cookie = document.cookie;
		var arrCookie = cookie.split(";");
			for (var i =0;i<arrCookie.length;i++) {
			arrCookie[i]=arrCookie[i].split("=");
		} 
	var User_Name = arrCookie[0][1];
	var Pass_Word = arrCookie[1][1];
	var time1=0,
		time2=0;
		
	$("#txt_Name").blur(function(){
		if($("#txt_Name").val()==""){
			if(time1==0){
				alert("用户名不能为空！");
				time1++;
			}
			$("#txt_Name").css("border","1px solid red");
		}else if($("#txt_Name").val()!=User_Name){
			alert("用户名错误！");
			$("#txt_Name").css("border","1px solid red");
		}else{
			$("#txt_Name").css("border","1px solid green");
		}
	})
	$("#txt_pass").blur(function(){
		if($("#txt_pass").val()==""){
			if(time2==0){
				alert("密码不能为空！");
				time2++;
			}
			$("#txt_pass").css("border","1px solid red");
		}else if($("#txt_pass").val()!=Pass_Word){
			alert("密码错误！");
			$("#txt_pass").css("border","1px solid red");
		}else{
			$("#txt_pass").css("border","1px solid green");
		}
	})
	
	
	
	
	$("#Denglu").click(function(){
//		usname=$("#txt_Name").val();
//		Pasword=$("#txt_pass").val();
		if($("#txt_Name").val()==User_Name){
			$("#txt_Name").css("border","1px solid green");
			if($("#txt_pass").val()==Pass_Word){
				$("#txt_pass").css("border","1px solid green");
				 alert("登录成功！")
				window.location.href="home.html"; 
				
			}else{
				$("#txt_pass").css("border","1px solid red");
				alert("密码错误！")
			}
		}else{
			 alert("用户名不正确！");
			$("#txt_Name").css("border","1px solid red");
		}
	})
})